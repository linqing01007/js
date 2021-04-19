// promise

// promise的链式调用中，第一个then会等待第一个promise对象的状态变为fulled 或者 rejected 才会调用，但是在then中链式调用，不会等待上一个then的异步操作完成，等上一个then的同步代码全部执行完成后就会直接执行下一个then（也就是then的链式调用是同步的）
// 返回一个新建的promise对象时，会等待该promise的then链全部调用结束才会执行return语句（但是不会等待里面的异步任务完成）


Promise.prototype.finally = function (callback) {
  // 无论promise里面的异步操作结果如何（resolve or reject)都会执行finally里面的回调
  // 返回一个promise支持链式调用
  let p = this.constructor
  return this.then(
    value => p.resolve(callback()).then(() => value),
    reason => p.resolve(callback()).then(() => { throw reason })
  )
}

Container.PENDING = 'pending'
Container.RESOLVED = 'resolved'
Container.REJECTED = 'rejected'

function Container (excutor) {
  this.state = undefined
  this.value = undefined
  this.reason = undefined
  this.onResolvedTodoList = [] // 缓存then链式调用中对应resolve状态的函数
  this.onRejectedTodoList = [] // 缓存then链式调用中对应reject的函数
  this.resolve = value => {
    // 这里设计为箭头函数是对外部的一种约束，防止外部更改resolve和reject函数中的this指向
    // 如果不是pending状态则直接返回（一旦resolve/reject则状态不可变）
    if (this.state !== Container.PENDING) return
    this.state = Container.RESOLVED
    this.value = value
    // 按照顺序取出缓存的回调函数并调用
    console.log
    while (this.onResolvedTodoList.length > 0) this.onResolvedTodoList.shift()()
  }
  this.reject = reason => {
    if (this.state !== Container.PENDING) return 
    this.state = Container.REJECTED
    this.reason = reason
    while (this.onRejectedTodoList.length > 0) this.onRejectedTodoList.shift()()
  }
  
  try {
    // excutor创建Promise对象时外部传递进来的回调函数，它主要有两个功能：
    // 1. 异步操作的载体
    // 2. 授权外部设置promise中管理的数据和状态：通过调用promise的resolve和reject方法
    // console.log('12111111', this.resolve)
    this.state = Container.PENDING
    excutor(this.resolve, this.reject)
  } catch (e) {
    this.reject(e)
  }
  
}

Container.prototype.then = function (onResolved, onRejected) {
  // 对onResolved和onRejected做缺省处理是处于两个方面考虑
  // 1.避免onResolved和onRejected调用时需要做大量的判空处理
  // 2.在链式调用时，支持在不传入某一回调函数或都不传的情况下，可以把结果状态和数据穿透下去
  onResolved = onResolved ? onResolved : value => value
  onRejected = onRejected ? onRejected : reason => {
    // 抛出异常是因为要知道异步操作失败的原因
    throw reason
  }
  const resolveContainer = function (container, value, resolve, reject) {
    if (!(value instanceof Container)) {
      resolve(value)
    } else {
      if (value !== Container) {
        value.then(resolve, reject)
      } else {
        reject(new TypeError('chaining cycle detected for promise #<promise>'))
      }
    }
  }
  // 为了支持then方法的链式调用，需要返回一个resolve后的promise对象
  let containerback = new Container((resolve, reject) => {
    switch (this.state) {
      case Container.PENDING:
        // 如果还是在pending状态，则把回调缓存起来放到onResolvedTodoList以及onRejectedTodoList中
        this.onResolvedTodoList.push(() => {
          // 这里将回调使用箭头函数包裹起来再缓存是从三方面考虑
          // 1.回调函数的执行时间（微任务延迟执行）
          // 2.回调函数的执行作用域
          // 3.回调的this指向
          setTimeout(() => {
            // 使用setTimeout是注册成宏任务，但是因为在bom环境下没有合适的api所以只能使用setTimeout，官方的promise是内置类，不是用js写的所以不受限于js和bom。
            try {
              // onResolved是外部传递进来的回调，这里是异步操作的载体。
              const value = onResolved(this.value)
              // value 是外部传入then的回调函数的返回值，需要对value进行处理后再写入(resolve(value))新的promise容器（containerback）中。
              resolveContainer(containerback, value, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
        this.onRejectedTodoList.push(() => {
          setTimeout(() => {
            try {
              const reason = onRejected(this.reason)
              resolveContainer(containerback, reason, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
        break
      case Container.RESOLVED:
        setTimeout(() => {
          try {
            const value = onResolved(this.value)
            resolveContainer(containerback, value, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
        break
      case Container.REJECTED:
        setTimeout(() => {
          try {
            const reason = onRejected(this.reason)
            resolveContainer(containerback, reason, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
        break
    }
  })
  return containerback
}

// new Container((resolve, reject) => {
//   setTimeout(() => {
//     // console.log('resolve:', resolve)
//     resolve('container resolve')
//   }, 1000)
// }).then(res => {
//   console.log('container res: ', res)
//   return res
// }).then(res => {
//   console.log('123123', res)
// })
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('promise resolve')
//   }, 1000)
// }).then(res => {
//   console.log('promise res: ', res)
//   return Promise
// }).then(res => {
//   console.log('323333', res)
// })

Promise.resolve().then(() => {
  console.log('then1')
  Promise.resolve().then(() => {
    console.log('then1-1')
  })
}).then(() => {
  console.log("then2")
})

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(1)
//   }, 0)
//   resolve('resolve1')
//   console.log(2)
// }).then((res) => {
//     console.log(res)
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('timer1')
//         resolve()
//       }, 0)
//     }).then(() => {
//       console.log('then1')
//     })
//     .then(async () => {
//       console.log('then 1-1')
//       return await a()
//     }).then(res => {
//       console.log('then 1-2:', res)
//     })
//   }).then(() => {
//     setTimeout(() => {
//       console.log('timeout1: ', 1)
//     }, 0)
//     console.log('then2')
//   })
//   .then(async () => {
//     console.log('then3-1')
//     await a()
//     console.log('then3-2')
//   })
//   .finally(() => {
//     console.log('finally')
//   })
// console.log(3)

// function a() {
//   setTimeout(() => {
//     console.log('async function a')
//   }, 0)
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('async function a promise')
//       resolve()
//     }, 0)
//   })
// }

// Promise.resolve()
//   .then(() => {
//     console.log('then1')
//     return Promise.resolve()
//       .then(() => {
//         console.log('then1-1')
//         return Promise.resolve()
//       })
//       .then(() => {
//         console.log('then1-2')
//       })
//   })
//   .then(() => {
//     console.log('then2')
//   })
//   .then(() => {
//     console.log('then3')
//   })
//   .then(() => {
//     console.log('then4')
//   })

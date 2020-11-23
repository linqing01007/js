// promise

// promise的链式调用中，第一个then会等待第一个promise对象的状态变为fulled 或者 rejected 才会调用，但是在then中链式调用，不会等待上一个then的异步操作完成，等上一个then的同步代码全部执行完成后就会直接执行下一个then（也就是then的链式调用是同步的）
// 返回一个新建的promise对象时，会等待该promise的then链全部调用结束才会执行return语句（但是不会等待里面的异步任务完成）
Promise.prototype.finally = function (callback) {
  let p = this.constructor
  return this.then(
    value => p.resolve(callback()).then(() => value),
    reason => p.resolve(callback()).then(() => { throw reason })
  )
}

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(1)
//   }, 0)
//   resolve('resolve1')
//   console.log(2)
// })
//   .then((res) => {
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

Promise.resolve()
  .then(() => {
    console.log('then1')
    return Promise.resolve()
      .then(() => {
        console.log('then1-1')
        // return Promise.resolve()
      })
      .then(() => {
        console.log('then1-2')
      })
  })
  .then(() => {
    console.log('then2')
  })
  .then(() => {
    console.log('then3')
  })
  .then(() => {
    console.log('then4')
  })

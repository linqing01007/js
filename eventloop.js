Promise.prototype.finally = function (callback) {
  let p = this.constructor
  return this.then(
    value => p.resolve(callback()).then(() => value),
    reason => p.resolve(callback()).then(() => { throw reason })
  )
}
const test1 = () => {
  console.log('function test1 start')
  setTimeout(() => {
    console.log('timeout 1')
    new Promise(resolve => {
      console.log('promise 1')
      resolve('promise1')
    }).then(res => {
      console.log('promise1 resolve: ', res)
    })
  }, 1)
  Promise.resolve('promise4').then(res => {
    console.log('promise4')
  })
  setTimeout(() => {
    console.log('timeout 2')
    Promise.resolve('promise2').then(res => {
      console.log('promise2 resolve: ', res)
    })
  }, 0)
  Promise.resolve('promise3').then(res => {
    console.log('promise3 resolve: ', res)
  })
  console.log('function test1 end')
  // 输出：
  //   function test1 start
  // function test1 end
  // promise4
  // promise3 resolve:  promise3
  // timeout 1
  // promise 1
  // timeout 2
  // promise1 resolve:  promise1
  // promise2 resolve:  promise2
}
// test1()

const test2 = function () {
  console.log('test2 start')

  setTimeout(() => {
    console.log('北哥')
  }, 1 * 2000)

  Promise.resolve().then(() => {
    console.log('promise1')
  }).then(() => {
    console.log('promise2')
  })

  async function foo () {
    await bar()
    console.log('async1 end')
  }
  foo()

  async function errorFunc () {
    try {
      await Promise.reject('error!!!')
    } catch (e) {
      console.log('error: ', e)
    }
    console.log('async1')
    return Promise.resolve('async1 success')
  }
  errorFunc().then(res => console.log(res))

  function bar () {
    console.log('async2 end')
  }

  console.log('script end')

  // 输出：
  // test2 start
  // async2 end
  // async1
  // script end
  // promise1
  // async1 end
  // error: error!!!
  // async1 success
  // promise2
  // 北哥
}
// test2()

const test3 = function () {
  console.log('1')

  setTimeout(() => {
    console.log('2')
    Promise.resolve().then(() =>{
      console.log('3')
    })
    new Promise((resolve) => {
      console.log('4')
      resolve()
    }).then(() => {
      console.log('5')
    })
  })

  Promise.reject().then(() => {
    console.log('13')
  }, () => {
    console.log('12')
  })

  new Promise((resolve) => {
    console.log('7')
    resolve()
  }).then(() => {
    console.log('8')
  })

  setTimeout(() => {
    console.log('9')
    Promise.resolve().then(() => {
      console.log('10')
    })
    new Promise((resolve) => {
      console.log('11')
      resolve()
    }).then(() => {
      console.log('12')
    })
  })

  // 输出：
  // 1
  // 7
  // 12
  // 8
  // 2
  // 4
  // 9
  // 11
  // 3
  // 5
  // 10
  // 12
}
// test3()

const test4 = function () {
  new Promise((resolve, reject) => {
    console.log(1)
    resolve()
  })
  .then(() => {
    console.log(2)
    new Promise((resolve, reject) => {
      console.log(3)
      setTimeout(() => {
        reject()
      }, 3 * 1000)
      resolve()
    })
    .then(() => {
      console.log(4)
      new Promise((resolve, reject) => {
        console.log(5)
        resolve()
      })
      .then(() => {
        console.log(7)
      })
      .then(() => {
        console.log(9)
      })
    })
    .then(() => {
      console.log(8)
    })
  })
  .then(() => {
    console.log(6)
  })

  // 输出：
  // 1
  // 2
  // 3
  // 6
  // 4
  // 5
  // 8
  // 7
  // 9
}
// test4()

const test5 = function () {
  Promise.resolve()
    .then(() => {
      console.log('promise1')
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('timer2')
          resolve()
        }, 0)
      })
        .then(async () => {
          await foo()
          return new Error('error1')
        })
        .then((res) => {
          setTimeout(() => {
            console.log('res1: ', res)
            Promise.resolve()
              .then(() => {
                return new Error('error!!!')
              })
              .then(res => {
                console.log('res2: ', res)
                console(1)
              })
              .catch(err => {
                console.log('err1: ', err)
              })
          }, 1 * 3000)
        })
        .catch(err => {
          console.log('err2: ', err)
        })
        .finally((res) => {
          console.log('finally: ', res)
          throw new Error('error2')
        })
        .then((res) => {
          console.log('res3: ', res)
        }, err => {
          console.log('err3: ', err)
        })
    })
    .then(() => {
      console.log('promise2')
    })
  
  function foo () {
    setTimeout(() => {
      console.log('async1')
    }, 2 * 1000)
  }

  setTimeout(() => {
    console.log('timer1')
    Promise.resolve()
      .then(() => {
        console.log('promise3')
      })
  }, 0)
  console.log('start')

  // 输出：
  //   start
  // promise1
  // timer1
  // promise3
  // timer2
  // finally:  undefined
  // err3:  Error: error2
  //     at Promise.then.then.catch.finally (f:\codefun\web\util\eventloop.js:236:17)
  //     at then.value (f:\codefun\web\util\eventloop.js:4:24)
  //     at <anonymous>
  //     at process._tickCallback (internal/process/next_tick.js:188:7)
  // promise2
  // async1
  // res1:  Error: error1
  //     at Promise.then (f:\codefun\web\util\eventloop.js:213:18)
  //     at <anonymous>
  //     at process._tickCallback (internal/process/next_tick.js:188:7)
  // res2:  Error: error!!!
  //     at Promise.resolve.then (f:\codefun\web\util\eventloop.js:220:24)
  //     at <anonymous>
  //     at process._tickCallback (internal/process/next_tick.js:188:7)
  // err1:  TypeError: console is not a function
  //     at Promise.resolve.then.then.res (f:\codefun\web\util\eventloop.js:224:17)
  //     at <anonymous>
  //     at process._tickCallback (internal/process/next_tick.js:188:7)
}
// test5()

const test6 = function () {
  async function async1 () {
    console.log('async1 start')
    new Promise((resolve, rejuect) => {
      try {
        throw new Error('error1')
      } catch (e) {
        console.log('e')
      }
      setTimeout(() => {
        resolve('promise4')
      }, 3 * 1000)
    })
      .then(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
      .finally(res => {
      console.log('finally')
    })
    console.log(await async3())
    console.log('async1 end')
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 0)
    }).then(res => {
      setTimeout(() => {
        console.log('1111111')
      }, 0)
    })
  }
  function async3 () {
    console.log('async2')
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2)
      }, 1 * 3000)
    })
  }
  console.log('script start')
  setTimeout(() => {
    console.log('setTimeout')
  }, 0)
  const a = async1()
  console.log('a: ', a)

  new Promise(resolve => {
    console.log('promise1')
    resolve()
  })
    .then(() => {
      console.log('promise2')
      return new Promise(resolve => {
        resolve()
      })
        .then(() => {
          console.log('then1-1')
        })
    })
    .then(() => {
      console.log('promise3')
    })
  console.log('script end')

  // 输出：
//   script start
// async1 start
// e
// async2
// promise1
// script end
// promise2
// then1-1
// promise3
// setTimeout
// promise4
// finally
// 2
// async1 end
}
test6()
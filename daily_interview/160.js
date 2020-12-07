const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

function test() {
  list.forEach(async x=> {
    const res = await square(x)
    console.log(res)
  })
}
// test()


/**
 * 输出1， 4， 9
 * forEach不能阻塞，默认是请求并行发起，所以是同时输出1、4、9。
 * 可以用for循环改成串行，或者promise本身的链式调用
 */
let promise = Promise.resolve()
function test2(i = 0) {
  if (i === list.length) return
  promise = promise.then(() => square(list[i]))
  test(i+1)
 }
 
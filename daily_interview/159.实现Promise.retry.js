// 实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject

Promise.retry = function (fn, times=5) {
  return new Promise(async (resolve, reject) => {
    while (times--) {
      try {
        let res = await fn()
        resolve(res)
        break
      } catch (error) {
        if (!times) {
          reject(error)
        }
      }
    }
  })
}
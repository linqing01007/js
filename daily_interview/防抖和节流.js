// 防抖即防止抖动，在一定时间内事件触发会被重置，避免事件被误伤触发多次。代码实现重在清零clearTimeout。业务场景有避免登录按钮多次点击的重复提交。

// 节流：控制流量，在单位时间内事件只能触发一次。代码实现重在开锁关锁，timer=timeout, timer=null.业务场景，有在用户滚动页面时，需要每隔一段时间发送一次请求，而不是在用户停止滚动时发送请求。


// 简单的防抖
const debounce = function (fn, wait = 0, options = {
  leading: true, // 表示第一次立即触发
  context: null
}) {
  let timer = null
  let res
  const _debounce = function (...args) {
    options.context || (options.context = this)
    if (timer) {
      clearTimeout(timer)
    }
    if (options.leading && !timer) {
      // timer占位，避免一直执行这里
      timer = setTimeout(() => {
        timer = null
      }, wait)
      fn.apply(options.context, args)
    } else {
      timer = setTimeout(() => {
        fn.apply(options.context, args)
        timer = null
      }, wait)
    }
  }
  _debounce.cancle = function (reason = '') {
    clearTimeout(timer)
    timer = null
  }
  return _debounce
}

const testFn = function (m) {
  let res = 0
  for (let i = 0; i < 555 * m; i++) {
    res ^= i
  }
  console.log('>>>>>>>>', res)
  return res
}
let fn = debounce(testFn, 1, {leading: true})
for (let i = 1; i < 10; i++) {
  fn(i)
  if (i > 7) {
    fn.cancle()
  }
}

// 简单的节流
const throttle = function (fn, wait = 0) {
  let timer
  return function (...args) {
    if (timer) return
    timer = setTimeout(() => {
      fn.call(this, ...args)
      timer = null
    }, wait);
  }
}


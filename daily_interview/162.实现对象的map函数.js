// 类似Array.prototype.map

// [1,2].map((val, ind, arr) => {
//   return val
// })

Object.prototype.map = function (fn, thisValue) {
  let ret = {}
  for (let i of Object.keys(this)) {
    let res = fn.call(thisValue, this[i], i, this)
    if (res) {
      ret[i] = res
    }
  }
  return ret
}
let i = {
  a: {
    add: 1,
    val: 1
  },
  b: {
    add: 2,
    val: 2
  },
  c: {
    add: 3,
    val: 3
  }
}
let j = {j:1}
console.log(i.map(function(val) { // 这里的回调不能用箭头函数，否则会丢失this的绑定
  return val.add + val.val
}, j))


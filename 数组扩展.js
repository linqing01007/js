// const print = require("../../util/util.js").print


// 1.Array.find 用于找出第一个符合条件的数组成员。第一个参数为回调参数，所有数组成员依次执行该回调，并返回第一个满足条件的成员，否则返回undefined。
//  回调函数的3个参数分别为  当前成员值，当前成员索引，原数组；若提供第二个参数，则绑定回调函数中的this,注意此时不要用箭头函数来定义回调函数。
// Array.findIndex 类似，只是返回的是索引值

let p = {value: 1, a: 2}
let val = [1, 2, 3, 4, 5, 6].find(function(item) {
  if (item > 3) {
    return true
  }
}, p)
console.log(val)
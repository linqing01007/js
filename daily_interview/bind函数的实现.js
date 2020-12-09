// bind可以实现this的绑定以及柯里化
// 对this的绑定时还需要考虑new 操作对this的影响（应该是new优先）
// 

Function.prototype.bind = function (oThis) {
  if (typeof this !== 'function') {
    // 如果不是函数调用bind抛出异常
    throw new Error('must be called by function')
  }
  // 拷贝传给bind方法后面的参数
  let curArgs = Array.prototype.slice.call(arguments, 1)
  // 调用bind方法的函数，如foo.bind(),则callFn为foo
  let callFn = this

  let func = function () {}
  // 最终返回的函数
  let finFn = function () {
    // 这里的this指向返回的绑定方法调用时的this绑定，一般为全局对象
    // 当使用new调用返回的绑定方法时，这里的this指向绑定方法
    curArgs = curArgs.concat(Array.prototype.slice.call(arguments)) // 这里的arguments是传递给返回后的函数的参数
    console.log('1111111', curArgs)
    return callFn.apply(this instanceof func ? this : oThis || window, curArgs)
  }
  finFn.prototype = Object.create(func.prototype) // 给返回的函数接入原型链
  return finFn
}

function add (a, b) {
  this.c = 1
  return this.a + this.b + a + b
}
let a = add.bind({a:1, b:2})
console.log(a(1, 2, 3))
let b = new a()
console.log(b.c)


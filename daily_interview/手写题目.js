// 1. 实现instanceof操作符

const myIsinstanceof = function (left, right) {
  // 方法一：借助Object.prototype.isprototypeof
  // return right.prototype.isPrototypeOf(left)

  // 方法二：递归判断左边的原型链中是否存在等于右边的
  let p = Object.getPrototypeOf(left)
  while (true) {
    if (p === right.prototype) return true
    if (!p) return false
    p = Object.getPrototypeOf(p)
  }
}

// 2.实现new操作符
// new操作内部做的4件事：1 创建一个对象 2 将这个对象接入原型链 3 执行函数(函数内部的this指向新创建的对象) 4 如果函数没有返回对象则返回这个对象
const myNew = function (func, ...args) {
  if (typeof func != 'function') {
    throw Error(`new operation must be a function, not ${typeof func}`)
  }
  const o = Object.create(func.prototype)
  const ot = func.call(o, ...args)
  if (ot && (['object', 'function'].includes(typeof ot))) return ot
  return o
}
// let a = function () {
//   this.q = 1
// }
// let objectA = myNew(a)
// console.log(objectA.q)


// 3 实现Object.assign方法
// assign方法将一个或多个源对象的自身的(继承的不算)所有可枚举的属性拷贝到目标对象中（浅拷贝）
// 如果目标对象中有相同的key，则会被源对象的属性覆盖，前面的源对象属性也会被后面的源对象覆盖
// String类型和Symbol类型的属性也会被拷贝
// Object.keys()返回所有的可枚举属性，包括继承的
// Object.getOwnPropertyNames()返回自身的所有属性，包括不可枚举的,但是不包括symbol
// Object.getOwnPropertySymbols()返回自身的symbol属性
// OBject.prototype.propertyIsEnumerable(key) 检测属性是否可被for...in循环枚举，但是不包含继承的属性(返回false)
// Reflect.ownKeys() 返回自身的所有属性，包括symbol，等同于[...getOwnPropertyNames(), ...getOwnPropertySymbols()]
const myAssign = function (target, ...src) {
  if (target === null || target === undefined) {
    throw Error('can not convert null or undefined to object')
  }
  for (let s of src) {
    let keys = [...Object.keys(s), ...Object.getOwnPropertySymbols(s)]
    for (let key of keys) {
      if (s.propertyIsEnumerable(key)) {
        target[key] = s[key]
      }
    }
  }
  return target
}
// let symbol = Symbol(1)
// const a = {
//   q: 1,
//   [symbol]: 2
// }
// Reflect.defineProperty(a, 'w', {
//   value: 1,
//   writable: true,
//   enumerable: true,
//   configurable: true
// })
// // console.log(Reflect.ownKeys(a), Object.keys(a), Object.getOwnPropertyNames(a))
// console.log(myAssign({}, a))


// 4.实现bind方法
// 改变函数内this的指向，并且传入参数，返回一个绑定后的函数
// 如果对返回函数用new调用，不会改变里面的this指向（指向new的对象）
const myBind = function (oThis, ...args) {
  if (typeof this != "function") {
    throw Error('bind error, bind must be call by function')
  }
  let restArgs = args
  let fToBind = this, func = function () {}
  let fBound = function (...args) {
    return fToBind.apply(this instanceof func ? this : oThis || window, restArgs.concat(args))
  }
  func.prototype = this.prototype
  fBound.prototype = new func()
  return fBound
}


// 5.实现call方法
// 用指定的this值和参数来调用函数
const myCall = function (oThis, ...args) {
  // 如果第一个参数是null/undefined，则内部this指向全局对象
  // 第一个参数为基本数据类型则要转换为对象
  oThis =  oThis ? Object(oThis) : window
  let key = Symbol('this')
  oThis[key] = this
  let res = oThis[key](...args)
  Reflect.deleteProperty(oThis, key)
  return res
}
Reflect.defineProperty(Function.prototype, 'myCall', {
  value: myCall,
  writable: true,
  enumerable: false,
  configurable: false
})
// const o = {
//   add: function () {
//     return this.a + this.b + 10
//   },
//   a: 1,
//   b: 20
// }
// function add () {
//   console.log(this.a)
//   console.log(this.a + this.b + 1)
// }
// console.log(add.myCall(1))


// 6.函数柯里化
// 将一个多参数的函数转化为多个嵌套的单参数函数
const curry = function (targetFn) {
  return function curried (...args) {
    if (args.length >= targetFn.length) {
      return targetFn.apply(null, args)
    } else {
      return function (...args2) {
        return curried.apply(null, args.concat(args2))
      }
    }
  }
}
// const sum = function (a, b, c) {
//   return a + b + c
// }
// let sumCurry = curry(sum)
// console.log(sumCurry(1), sumCurry(10)(2), sumCurry(2)(3)(4))

// 事件发布订阅模式
class EventBus {
  constructor () {
    Reflect.defineProperty(this, 'handles', {
      value: {},
      enumerable: true,
      configurable: true,
      writable: true
    })
  }
  on (eventName, listener) {
    if (typeof listener != 'function') {
      throw Error('callback must be a function')
    }
    if (!this.handles[eventName]) {
      this.handles[eventName] = []
    }
    this.handles[eventName].push(listener)
  }
  emit (eventName, ...args) {
    let listeners = this.handles[eventName]
    if (!listeners) {
      console.log(`${eventName}事件不存在`)
      return
    }
    for (let listener of listeners) {
      listener(...args)
    }
  }
  off (eventName, listener = null) {
    if (!listener) {
      let res = Reflect.deleteProperty(this.handles, eventName)
      return res
    }
    let listeners = this.handles[eventName]
    if (listeners && listeners.length) {
      let index = listeners.findIndex(item => item === listener)
      listeners.splice(index, 1)
    }
  }
  once (eventName, listener) {
    if (typeof listener != 'function') {
      throw Error('callback must be a function')
    }
    let handle = (...args) => {
      listener(...args)
      this.off(eventName, handle)
    }
    this.on(eventName, handle)
  }
}

// const Bus = new EventBus()
// const a = () => {
//   console.log('aaaaaa')
// }
// const b = () => {
//   console.log('bbbbbbbbb')
// }
// const c = () => {
//   console.log('ccccccccc')
// }
// const d = () => {
//   console.log('ddddddddd')
// }
// Bus.on('log', a)
// Bus.on('log', b)
// Bus.once('once', c)
// Bus.emit('log')
// Bus.emit('log')
// Bus.emit('once')
// Bus.emit('once')
// console.log(Bus.handles)


// 简单的深拷贝
const deepCopy = function (source) {
  // 只拷贝可枚举的自有属性
  if (!source || typeof source != 'object') {
    return source
  }
  let res = Array.isArray(source) ? [] : {}
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      res[key] = deepCopy(source[key])
    }
  }
}


// 实现Object.is()
// Object.is(0, -0) false
// Object.is(NaN, NaN) true
const myIs = function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y
  } else {
    return x !== x && y !== y
  }
}


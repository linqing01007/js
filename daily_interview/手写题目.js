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
let symbol = Symbol(1)
const a = {
  q: 1,
  [symbol]: 2
}
Reflect.defineProperty(a, 'w', {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true
})
// console.log(Reflect.ownKeys(a), Object.keys(a), Object.getOwnPropertyNames(a))
console.log(myAssign({}, a))



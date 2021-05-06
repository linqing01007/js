// Symbol 模拟实现
// Symbol的特性
// 2.1 Symbol值通过Symbol函数生成，使用typeof 结果为“symbol”
// 2.2 Symbol函数前不能使用new命令，否则会报错。这是因为生成的Symbol是一个原始类型的值，不能是对象
// 2.3 instanceof的结果为false
// 2.4Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是在控制显示或者转化为字符串时易于区分。
// 2.5 如果Symbol参数是一个对象，就会调用该对象的toString方法转化为字符串后再生成symbol值。
// 2.6 symbol函数的参数只是表示对当前的symbol值的描述，相同参数的symbol函数返回的值是不相等的
// 2.7 symbol值不能与其他类型的值进行运算，会报错
// 2.8 Symbol值可以显示转化为字符串String(symbol)或者symbol.toString()
// 2.9 Symbol值可以作为标识符用于对象的属性名，可以保证不会出现同名的属性
// 2.10 Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回。但是，它也不是私有属性，有一个 Object.getOwnPropertySymbols 方法，可以获取指定对象的所有 Symbol 属性名。
// 2.11 如果我们希望使用同一个 Symbol 值，可以使用 Symbol.for。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。
// 2.12 Symbol.keyFor 方法返回一个已登记的 Symbol 类型值的 key。



// 当调用 Symbol 的时候，会采用以下步骤：
// 如果使用 new ，就报错
// 如果 description 是 undefined，让 descString 为 undefined
// 否则 让 descString 为 ToString(description)
// 如果报错，就返回
// 返回一个新的唯一的 Symbol 值，它的内部属性 [[Description]] 值为 descString

const SymbolPolyfill = function (description) {
  // 特性2：Symbol不能使用new命令
  if (this instanceof SymbolPolyfill) throw new TypeError("Symbol is not a constructor")
  let descString = description === undefined ? undefined : String(description)
  let symbol = Object.create(null)
  Reflect.defineProperties(symbol, {
    '__Description': {
      value: descString,
      writable: false,
      enumerable: false,
      configurable: false
    }
  })
  // todo
  return symbol
}
function a () {}
const b = function () {}
console.log(Object.prototype.toString.call(SymbolPolyfill))

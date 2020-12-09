// 这里是proxy相关的知识点学习

// const print = require('../../../studyspace/util/util.js').print

/*
1.proxy 可以理解为在目标对象上设置一层“拦截”，对这个对象进行操作时，都要先经过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
拦截操作的对应处理函数 接受的参数列表： target, key, receiver,分别为拦截的目标对象，属性名，proxy实例本身（严格来说，是指操作行为所针对的对象）

2.proxy支持的拦截操作一览：
get(target, propKey, receiver): 拦截对象的读取,proxy.proxy['a']

set(target, propKey, value, receiver): 拦截对象属性的设置,proxy.a=1

has(target, propKey): 拦截propkey in proxy 操作，返回布尔值,对for ... in 循环无效

deleteProperty(target, propKey): 拦截del proxy[a] 操作，返回布尔值

ownKeys(target): 拦截Object.getOwnPropertyNames(proxy), Object.getOwnPropertySymbols(proxy),Object.keys(proxy),for ... in 循环，返回一个数组，
   返回目标对象的所有自身属性的属性名，而Object.keys()仅返回可迭代的属性。

getOwnPropertyDescriptor(target, propKey): 拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象

defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。

preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。

getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。

isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。

setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。

apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。object 参数指目标对象的上下文(this)

construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
*/

// import print from '../util/util.js';
const print = require('../../util/util.js').print

//基础用法
const obj1 = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(typeof receiver)
        return 1
    },
    set: function (target, key) {
        console.log(`here set proxy val of {}`);
    }
})

let targetO = {
    a: 1
}

let target1 = Object.create(targetO)
Object.defineProperty(target1, 'b', {
    value: 2,
    enumerable: true,
    configurable: true,
    writable: true
})
let handler1 = {
    ownKeys(target) {
        console.log("11111111")
        return ['a', 'b']
    }
}
let { proxy5, revoke } = Proxy.revocable(targetO, handler1)
proxy5.a
revoke()
proxy5.a
let proxy1 = new Proxy(target1, handler1)
// console.log(proxy1.test, proxy1.abab)
console.log(Object.keys(proxy1))
console.log(Object.keys(target1))
// for (let prop in target1) {
    // console.log(prop)
// }







// 进阶用法
// 1.实现一个链式操作，pipe(3).double.pow.reverse.get,返回一个值
const pipe = (value) => {
    let funcStack = []
    let proxy = new Proxy({}, {
        get: function (target, fnName, receiver) {
            if (fnName === "get") {
                return funcStack.reduce((preVal, curFn) => {
                    // console.log(curFn(preVal), preVal, curFn) 
                    return curFn(preVal)
                }, value)
            }
            funcStack.push(pipeFunc[fnName])
            return proxy
        }
    })
    return proxy
}
const pipeFunc = {
    double(x) {
        return x * x
    },
    pow(x) {
        return Math.pow(x, 2)
    },
    reverse(x) {
        return parseInt(x.toString().split("").reverse().join(""))
    }
}

// console.log((pipe(3).double.pow.reverse.get))


// 2.实现数组读取负数的索引。
const createArray = (...elements) => {
    let array = [];
    array.push(...elements)
    // console.log(array)
    let proxy = new Proxy(array, {
        get: function (target, value, receiver) {
            let index = parseInt(value)//对象的属性名是字符串
            if (target.length <= 0) {
                return target[0]
            }
            if (index < 0) {
                 let dif = value % elements.length
                 value = dif === 0 ? 0 : dif + elements.length
                index = String(value)
            }
            return Reflect.get(target, index, receiver)
        }
    })
    return proxy
}
let array1 = createArray(1, 2, 3, 4, 5)
// console.log(array1[-10])   //-1

// 3.实现禁止以下划线开头的属性名的读写，抛出错误
const invariant = (target, key) => {
    if (key[0] === "_") {
        throw new Error("invariant key!!!")
    }
}
const handler3 = {
    get: function (target, key) {
        invariant(target, key)
        return target[key]
    },
    set: function (target, key, val) {
        invariant(target, key)
        target[key] = val
    }
}
let proxy3 = new Proxy({}, handler3)
// proxy3._k


// 4.
const obj2 = {
    a: 1,
    get a() {
        console.log('get a')
        return 1
    },
    set a(x) {
        console.log('set a')
        this.a = x
    }
}
const handler4 = {
    get: function (target, key, receiver) {
        console.log('proxy get')
        return Reflect.get(target, key, receiver)
    },
    set: function (target, key, receiver) {
        console.log('proxy set')
        Reflect.set(target, key, receiver)
    }
}
let proxy4 = new Proxy(obj2, handler4)

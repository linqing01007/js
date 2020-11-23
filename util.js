
const serialize = (obj, separator=",") => {
  /* 返回obj的序列化字符串，用于输出打印,如果某一个键值为function时会跳过, 不支持打印属性名为Symbol的值 */
  let value = ""
  let curLevel = 0

  const _serlIterable = (obj, level, separator=",") => {
    /*  */
    let prefix = "["
    let postfix = "]"
    let isArrayObj = true
    let newline_indent = "\n" + " ".repeat(level + 1)
    let item_indent = separator + newline_indent
  
  
    if (!Array.isArray(obj)) {
        prefix = "{"
        postfix = "}"
        isArrayObj = false
    }
    let msg = []
    msg.push(prefix)
    // let properties = Object.getOwnPropertyNames(obj)
    for (let key of obj.keys()) {
        let value = obj[key]
        if (value === undefined) {
            value = "undefined"
        }else if (value === null) {
            value = "null"
        }else if (typeof value === "object" && level <= 4) {
            value = _serlIterable(value, level+1)
        }else {
            value = value.toString()
        }
  
        if (newline_indent) {
            msg.push(newline_indent)
            newline_indent = ""
        }else {
            msg.push(item_indent)
        }
  
        if (!isArrayObj) {
            msg.push(key.toString() + " : " + value)
        }else {
            msg.push(value)
        }
    }
    msg.push("\n" + " ".repeat(level) + postfix)
    return msg.join("")
  }
  if (obj === undefined) {
      value = "undefined"
  }else if (obj === null) {
      value = "null"
  }else if (typeof obj === "object") {
      value = _serlIterable(obj, curLevel, separator)
  }else {
      value = obj.toString()
  }
  return value
}

const print = (msg) => {
  console.log(serialize(msg))
}

Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
        return Error('bind error')
    }
    let fToBind = this, fNOP = function () {}
    let fBound = function() {
        return fToBind.apply(this instanceof fNOP && oThis ? this : oThis || window, Array.prototype.slice.call(arguments))
    }
    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP()
    return fBound
} 

module.exports = {
  print: print
}
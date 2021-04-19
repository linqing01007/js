
const ListNode = function(val) {
	this.val = val;
	this.next = null;
}

Reflect.defineProperty(Object.prototype, 'getValue', {
  writable: true,
  enumerable: true,
  value: function (val, de) {
    if (val in this) {
      return this[val]
    } else {
      this[val] = de
      return this[val]
    }
  }
})

const MAX_VALUE = Math.pow(2, 31) - 1, MIN_VALUE = -Math.pow(2, 31);

const createListNode = function (arr){
	let head = new ListNode(0);
	let p = head;
	for (let i = 0; i < arr.length; i++) {
		p.next = new ListNode(arr[i]);
		p = p.next;
	}
	return head.next;
}
const convertListNodeToArr = function (listNode) {
	let arr = [];
	while(listNode) {
		let val = listNode.val;
		arr.push(val);
		listNode = listNode.next;
	}
	return arr;
}


const quickSort = function (nums){
  if (nums.length <= 1) return nums
  let mid = nums[0]
  let left = [], right = []
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= mid) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }
  return quickSort(left).concat([mid]).concat(quickSort(right))
}

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
  convertListNodeToArr,
  createListNode,
  MAX_VALUE,
  MIN_VALUE,
  quickSort,
  print
}
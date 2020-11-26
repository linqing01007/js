// 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
// 实现 LRUCache 类：

// LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
//  

// 进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？

//  

// 示例：

// 输入
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// 输出
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// 解释
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// lRUCache.get(1);    // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lRUCache.get(2);    // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// lRUCache.get(1);    // 返回 -1 (未找到)
// lRUCache.get(3);    // 返回 3
// lRUCache.get(4);    // 返回 4
//  

// 提示：

// 1 <= capacity <= 3000
// 0 <= key <= 3000
// 0 <= value <= 104
// 最多调用 3 * 104 次 get 和 put

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/lru-cache
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} capacity
 */

//  使用es6中的map结构，利用map的遍历是按照元素的插入顺序这一特性。
// var LRUCache = function(capacity) {
//   this.capacity = capacity
//   this.cache = new Map()
// };


// 利用双向链表+dict实现,dict中映射key与双向链表中的node，node中存放key的值。
const DLinkedNode = function(key=0, value=0) {
  this.key = key
  this.value = value
  this.pre = null
  this.next = null
}

var LRUCache = function (capacity) {
  this.capacity = capacity
  this.cache = Object.create(null)
  this.size = 0
  // head指向最近使用的值(伪头部节点)
  this.head = new DLinkedNode()
  // end指向最久使用的值(伪尾部节点)
  this.end = new DLinkedNode()
  this.head.next = this.end
  this.end.pre = this.head
}

/** 
 * @param {number} key
 * @return {number}
 */
// LRUCache.prototype.get = function(key) {
//   if (this.cache.has(key)) {
//     const val = this.cache.get(key)
//     this.cache.delete(key)
//     this.cache.set(key, val)
//     return val
//   } else {
//     return -1
//   }
// };

LRUCache.prototype.get = function (key) {
  if (key in this.cache) {
    // 更新双向链表中该key对应的node的位置
    let node = this.cache[key]
    this.moveToHead(node)
    return node.value
  }
  return -1
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
// LRUCache.prototype.put = function(key, value) {
//   if (this.cache.has(key)) {
//     this.cache.delete(key)
//   }
//   this.cache.set(key, value)
//   while (this.cache.size > this.capacity) {
//     let keys = this.cache.keys()
//     this.cache.delete(keys.next().value)
//   }
// };

LRUCache.prototype.put = function (key, value) {
  if (key in this.cache) {
    let node = this.cache[key]
    node.value = value
    this.moveToHead(node)
  } else {
    let node = new DLinkedNode(key, value)
    this.cache[key] = node
    this.size += 1
    this.addToHead(node)
    if (this.size > this.capacity) {
      this.size -= 1
      this.removeEnd()
    }
  }
}

LRUCache.prototype.addToHead = function (node) {
  node.next = this.head.next
  this.head.next.pre = node
  node.pre = this.head
  this.head.next = node
}

LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node)
  this.addToHead(node)
}

LRUCache.prototype.removeNode = function (node) {
  node.pre.next = node.next
  node.next.pre = node.pre
  node.next = null
  node.pre = null
}

LRUCache.prototype.removeEnd = function () {
  let endNode = this.end.pre
  this.removeNode(endNode)
  let key = endNode.key
  delete this.cache[key]
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
let obj = new LRUCache(2)
obj.put(1, 1)
obj.put(2, 2)
console.log(obj.get(1))
obj.put(3,3)
console.log(obj.get(2))
obj.put(4,4)
obj.get(1)

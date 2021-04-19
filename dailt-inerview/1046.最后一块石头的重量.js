// 有一堆石头，每块石头的重量都是正整数。

// 每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

// 如果 x == y，那么两块石头都会被完全粉碎；
// 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
// 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。

//  

// 示例：

// 输入：[2,7,4,1,8,1]
// 输出：1
// 解释：
// 先选出 7 和 8，得到 1，所以数组转换为 [2,4,1,1,1]，
// 再选出 2 和 4，得到 2，所以数组转换为 [2,1,1,1]，
// 接着是 2 和 1，得到 1，所以数组转换为 [1,1,1]，
// 最后选出 1 和 1，得到 0，最终数组转换为 [1]，这就是最后剩下那块石头的重量。
//  

// 提示：

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/last-stone-weight
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} stones
 * @return {number}
 */
const MaxPriorityQuene = function () {
  this.items = []
}
MaxPriorityQuene.prototype.enqueue = function (element, priority) {
  // 按照优先级进入队列
  const queueElement = {
    element,
    priority
  }
  if (this.isEmpty()) {
    this.items.push(queueElement)
  } else {
    let i = 0
    while (i < this.size() && this.items[i].priority > priority) {
      i++
    }
    this.items.splice(i, 0, queueElement)
  }
}
MaxPriorityQuene.prototype.dequeue = function () {
  // 移除队列的第一项，并返回被移除的元素
  if (this.isEmpty()) return null
  return this.items.shift()
}
MaxPriorityQuene.prototype.isEmpty = function () {
  return !(this.items.length > 0)
}
MaxPriorityQuene.prototype.size = function () {
  return this.items.length
}
MaxPriorityQuene.prototype.print = function () {
  // 按照优先级打印元素
  for (let item of this.items) {
    console.log(item.element, item.priority)
  }
}
var lastStoneWeight = function(stones) {
    // 最大堆数据结构
    const queue = new MaxPriorityQuene()
    for (let stone of stones) {
      queue.enqueue('x', stone)
    }
    while (queue.size() > 1) {
      let first = queue.dequeue()['priority']
      let sec = queue.dequeue()['priority']
      if (first !== sec) {
        queue.enqueue('x', first - sec)
      }
    }
    return queue.isEmpty() ? 0 : queue.dequeue()['priority']
};
const i = [2,7,4,1,8,2]
console.log(lastStoneWeight(i))

const MaxPriorityQuene = function () {
  // 最大优先队列，优先值最大放前面
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
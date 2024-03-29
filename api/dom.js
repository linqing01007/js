/*
  offsetTop: 元素上外边距离包含元素的上内边框的像素距离
  clientWidth: 元素内容区域宽度加上左右内边距宽度，即clientWidth = content + padding
  clientHeight: 元素内容区域高度加上上下内边距高度，即 clientHeight = content + padding
  scrollLeft,scrollTop，可以确定元素的滚动状态
*/

// 判断元素是否在可视区域
const isInViewPortOne = function (el) {
  // 方法一：利用offsetTop,scrollTop进行计算
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.clientHeight
  const scrollTop = document.documentElement.scrollTop
  const offsetTop = el.offsetTop
  return (offsetTop - scrollTop) <= viewPortHeight
}

const isInViewPortTwo = function (el) {
  // 方法二：使用getBoundingClientRect，返回一个DOMRect对象，拥有left，top，right，bottom，x， y， width， 和 height属性
  // 如果一个元素在视窗内，那么一定满足四个条件
  // 1 top大于等于0
  // 2 left大于等于0
  // 3 bottom小于等于视窗高度
  // 4 right小于等于视窗宽度
  const viewWidth = window.innerWidth || document.documentElement.clientWidth
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  const {
    top,
    right,
    bottom,
    left
  } = el.getBoundingClientRect()
  return (
    top >= 0 &&
    left >= 0 &&
    right <= viewWidth &&
    bottom <= viewHeight
  )
}







// const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight // 获取窗口高度
//   const offsetTop = el.offsetTop
//   const scrollTop = document.documentElement.scrollTop
//   const top = offsetTop - scrollTop
//   return top <= viewPortHeight
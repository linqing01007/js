
// 从start下标开始，删除deleteNum个元素，并将replaceArray从start下标开始插入
Array.prototype._splice = function (start, deleteNum, ...replaceArray) {
  if (typeof start !== 'number' || isNaN(start)) {
    throw Error('start must be a number')
  }
  let array = this
  // console.log("11111111", array)
  if (start >= array.length) {
    throw Error('start index can not be bigger than length')
  }
  let i = start
  let end = i + deleteNum
  let endArr = array.slice(end)
  const deleteArr = array.slice(start, end)
  // console.log('end: ', end)
  // console.log('endarr: ', endArr)
  // console.log('deleteArr: ', deleteArr)
  for (let j = 0; j < replaceArray.length; j++) {
    array[i] = replaceArray[j]
    i++
  }
  // console.log('after replace: ', array)
  for (let j = 0; j < endArr.length; j++) {
    array[i] = endArr[j]
    i++
  }
  // console.log('after end: ', array)
  // 如果要删除的元素比较多，可能出现i小于end的情况，此时要把多余的元素去掉
  while (i <= end) {
    array.pop()
    i++
  }
  return deleteArr
}
let test = [1, 2, 3, 4, 5, 6, 7, 8]
let a = [1, 2, 3, 4, 5, 6, 7, 8]
a.splice(1, 1, ...[1, 2])
console.log(a)
console.log(test._splice(1, 1, ...[1, 2]))
console.log(test)

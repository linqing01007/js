function getIndex (arr) {
  let index = null
  let maxVal = Math.max(...arr)
  arr.forEach((val, ind) => {
    if (val > 0 && val < maxVal) {
      index = ind
      maxVal = val
    }
  })
  return index
}
let i = [10, 21, 0, -7, 35, 7, 9, 23, 18]
console.log(getIndex(i))
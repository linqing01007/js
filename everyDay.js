// import { print } from '../../util/util.js'

const isValid = function (s) {
  // 20:有效的括号
  //()[]{}
  const patternLeft = /[\(\[\{]/
  const patternRight = /[\)\}\]]/
  const valid = ['()', '[]', '{}']
  let stack = []
  for (let char of s) {
    if (patternLeft.test(char)) {
      stack.push(char)
    } else {
      const pre = stack.pop()
      if (!valid.includes(pre+char)) {
        return false
      }
    }
  }
  return stack.length > 0 ? false : true
}

const PredictTheWinner = function (nums) {
  // 设p(i, j)表示
}
[1, 2, 3, 4, 5, 6, 6, 7, 8, 9]
let input = '([)][]{}'
console.log(isValid(input))
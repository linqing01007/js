// 有一个二维矩阵 A 其中每个元素的值为 0 或 1 。

// 移动是指选择任一行或列，并转换该行或列中的每一个值：将所有 0 都更改为 1，将所有 1 都更改为 0。

// 在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的得分就是这些数字的总和。

// 返回尽可能高的分数。

//  

// 示例：

// 输入：[[0,0,1,1],
//       [1,0,1,0],
//       [1,1,0,0]]

/**
 * [1,1,0,0],[1,0,1,0],[1,1,0,0]
 * [1,1,1,0],[1,0,0,0],[1,1,1,0]
 * [1,1,1,1],[1,0,0,0],[1,1,1,1]
 */
// 输出：39
// 解释：
// 转换为 [[1,1,1,1],[1,0,0,1],[1,1,1,1]]
// 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
//  

// 提示：

// 1 <= A.length <= 20
// 1 <= A[0].length <= 20
// A[i][j] 是 0 或 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/score-after-flipping-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
  // 转换规则：
  // 对于每一行，如果第一个元素不为1，则移动这一行 （此时每行行首元素均为1）
  // 对于每一列，如果1的数量比0的数量小，则移动这一列
  // todo 优化：可以不修改A的值，只需要计算每个1为最后的总和提供的贡献值即可。
  // 比如，对于A[i][0]，提供的贡献值为 2 ** (A.length-1)
  for (let i = 0; i < A.length; i++) {
    // 把行首元素为0的行移动
    if (A[i][0] === 0) {
      for (let j = 0; j < A[i].length; j++) {
        A[i][j] = A[i][j] ^ 1
      }
    }
  }
  console.log('1111111', A)
  for (let i = 1; i < A[0].length; i++) {
    let countZero = 0, countOne = 0
    for (let j = 0; j < A.length; j++) {
      if (A[j][i] === 0) {
        countZero += 1
        // if (countZero > (1+A.length >> 2)) break
      } else {
        countOne += 1
      }
    }
    console.log('333333333: ', i, countZero, countOne)
    if (countOne >= countZero) continue
    for (let j = 0; j < A.length; j++) {
      A[j][i] = A[j][i] ^ 1
    }
  }

  const changeToDigit = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) continue
      sum += Math.pow(2, arr.length-i-1) * arr[i]
    }
    return sum
  }
  let res = 0
  for (let i = 0; i < A.length; i++) {
    const d = changeToDigit(A[i])
    console.log('changeToDigit: ', A[i], d)
    res += d
  }
  return res
};

const i = [[0,0,0],[0,0,0],[1,0,1],[0,1,0],[0,1,0],[0,0,1],[1,1,1]]
console.log(matrixScore(i))

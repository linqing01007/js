// 有一个长度为 arrLen 的数组，开始有一个指针在索引 0 处。

// 每一步操作中，你可以将指针向左或向右移动 1 步，或者停在原地（指针不能被移动到数组范围外）。

// 给你两个整数 steps 和 arrLen ，请你计算并返回：在恰好执行 steps 次操作以后，指针仍然指向索引 0 处的方案数。

// 由于答案可能会很大，请返回方案数 模 10^9 + 7 后的结果。

//  

// 示例 1：

// 输入：steps = 3, arrLen = 2
// 输出：4
// 解释：3 步后，总共有 4 种不同的方法可以停在索引 0 处。
// 向右，向左，不动
// 不动，向右，向左
// 向右，不动，向左
// 不动，不动，不动
// 示例  2：

// 输入：steps = 2, arrLen = 4
// 输出：2
// 解释：2 步后，总共有 2 种不同的方法可以停在索引 0 处。
// 向右，向左
// 不动，不动
// 示例 3：

// 输入：steps = 4, arrLen = 2
// 输出：8
//  

// 提示：

// 1 <= steps <= 500
// 1 <= arrLen <= 10^6

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
  // let count = 0
  // const dfs = function (step, arrLen, i) {
  //   if (step < i) return
  //   if (step <= 0) {
  //     if (i == 0) {
  //       count++
  //     }
  //     return
  //   }
  //   console.log('1111111111', step, i)
  //   let choice = [0, 1, -1]
  //   let nextStep = step - 1
  //   for (let c of choice) {
  //     let nextI = i + c
  //     // console.log('11111111', nextI, i, c)
  //     if (nextI < 0 || nextI >= arrLen) continue
  //     if (nextStep < nextI) continue
  //     dfs(nextStep, arrLen, nextI)
  //   }
  // }
  // dfs(steps, arrLen, 0)
  // return count % (Math.pow(10, 9) + 7)
  // 求解方案数可以用动态规划
  // 设dp[i][j]表移动i步后位于j位置的方案数，那么有约束条件0<=i<=steps, 0<=j<=min(arrLen - 1, steps)
  // 由于每次只能左右移动一步或不动，所有有
  // dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j] + dp[i - 1][j + 1]
  // dp[0][0] = 1,对于i=0, 1<=j<=min(arrLen - 1, steps)时，dp[0][j]=0
  let maxColumn = Math.min(arrLen - 1, steps)
  const MODULO = Math.pow(10, 9) + 7
  let dp = Array(steps + 1).fill(0).map(() => Array(maxColumn + 1).fill(0))
  dp[0][0] = 1
  for (let i = 1; i <= steps; i++) {
    for (let j = 0; j <= maxColumn; j++) {
      dp[i][j] = dp[i - 1][j]
      if (j - 1 >= 0) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % MODULO
      }
      if (j + 1 <= maxColumn) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % MODULO
      }
    }
  }
  return dp[steps][0]
};
console.log(numWays(6, 7))

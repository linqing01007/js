// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。

//  

// 示例 1：

// 输入：nums = [2,3,2]
// 输出：3
// 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
// 示例 2：

// 输入：nums = [1,2,3,1]
// 输出：4
// 解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
//      偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 3：

// 输入：nums = [0]
// 输出：0

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/house-robber-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  // 动态规划，设dp[i]表示第i个数所能获得的最大收益
  // 则dp[i] = max(dp[i - 2] + nums[i], dp[i-1])
  // 可rob的数组范围分两种：[0, n - 1], [1, n]
  let length = nums.length
  if (length === 0) {
    return null
  } else if (length === 1) {
    return nums[0]
  } else if (length === 2) {
    return Math.max(nums[0], nums[1])
  }
  const robInRange = function (nums, start, end) {
    let dp = Array(end + 1).fill(0)
    dp[start] = nums[start], dp[start + 1] = Math.max(nums[start + 1], nums[start])
    console.log(nums, start, end, dp)
    for (let i = start + 2; i <= end; i++) {
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }
    console.log('11111111', dp)
    return dp[end]
    // let first = nums[start], second = Math.max(nums[start], nums[start + 1])
    // for (let i = start + 2; i <= end; i++) {
    //   let temp = second
    //   second = Math.max(first + nums[i], second)
    //   first = temp
    // }
    // return second
  }
  return Math.max(robInRange(nums, 0, length - 2), robInRange(nums, 1, length - 1))
};
const i = [1, 7, 9, 2]
console.log(rob(i))

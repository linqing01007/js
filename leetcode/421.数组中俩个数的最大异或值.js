// 给你一个整数数组 nums ，返回 nums[i] XOR nums[j] 的最大运算结果，其中 0 ≤ i ≤ j < n 。

// 进阶：你可以在 O(n) 的时间解决这个问题吗？

//  

// 示例 1：

// 输入：nums = [3,10,5,25,2,8]
// 输出：28
// 解释：最大运算结果是 5 XOR 25 = 28.
// 示例 2：

// 输入：nums = [0]
// 输出：0
// 示例 3：

// 输入：nums = [2,4]
// 输出：6
// 示例 4：

// 输入：nums = [8,10,2]
// 输出：10
// 示例 5：

// 输入：nums = [14,70,53,83,49,91,36,80,92,51,66,70]
// 输出：127
//  

// 提示：

// 1 <= nums.length <= 2 * 104
// 0 <= nums[i] <= 231 - 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let maxNum = Math.max(...nums)
  let res = maxNum
  console.log(maxNum)
  for (let num of nums) {
    if (num == maxNum) continue
    res = Math.max(res, maxNum ^ num)
  }
  let ans = 0
  for (let i = 0; i < nums.length;i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // ans = Math.max(ans, nums[i] ^ nums[j])
      if ((nums[i] ^ nums[j]) > ans) {
        ans = nums[i] ^ nums[j]
        console.log('>>>>>>>>>', nums[i], nums[j], ans)
      }
    }
  }
  return ans
};
console.log(findMaximumXOR([14,70,53,83,49,91,36,80,92,51,66,70]))

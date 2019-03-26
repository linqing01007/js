给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。

示例 1:

输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    /*
	由于有正负，所以每次相乘完毕后，应该保留最大和最小值，也就是最大正数，最小负数
	*/
	let dp = Array.from({length: nums.length}, () => 0);
	dp[0] = nums[0];
	let max = min = 1;
	for (let i = 0; i < nums.length; i++) {
		dp[i] = Math.max(max * nums[i], min * nums[i], nums[i]);
		min = Math.min(max * nums[i], min * nums[i], nums[i]);
		max = dp[i];
	}
	return Math.max(...dp);
};

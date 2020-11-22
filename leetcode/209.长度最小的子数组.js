给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。

示例: 

输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    //滑动窗口方法
	if (!nums.length) { return 0; }
	let left = 0, right = 0, sum = 0;
	let res = nums.length + 1;//最大不会超过nums的长度
	while(right < nums.length) {
		while(sum < s && right < nums.length) {
			sum += nums[right]
			right++;
		}
		while (sum >= s && left >= 0) {
			res = Math.min(res, right - left);
			sum -= nums[left];
			left++;
		}
	}
	return res === nums.length + 1 ? 0 : res;
};

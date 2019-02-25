给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [];
	let combine = (n, k, level, lastArr, ans) => {
		if (lastArr.length === k) {
			let temp = lastArr.slice();
			ans.push(temp);
			return
		}
		for (let i = level; i < nums.length; i++) {
			lastArr.push(nums[i]);
			combine(n, k, i + 1, lastArr, ans);
			lastArr.pop(i);
		}
	}
	for (let i = 1; i <= nums.length; i++) {
		let last = [];
		combine(nums.length, i, 0, last, ans)
	}
	return ans.concat([[]]);
};

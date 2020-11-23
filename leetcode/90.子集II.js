给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: [1,2,2]
输出:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
   let ans = [];
	nums.sort((a, b) => a - b);//排序是为了后面更好的去重
	let dfs = (nums, k, level, lastArr, duplicate) => {
		if (lastArr.length === k) {
			let temp = lastArr.slice()
			ans.push(temp);
			
			return
		}
		for (let i = level; i < nums.length; i++){
			if (duplicate.indexOf(nums[i]) > -1){
				//如果当前循环已经取过该值则跳过
				continue;
			}
			lastArr.push(nums[i]);
			dfs(nums, k, i + 1, lastArr, duplicate);
			lastArr.pop();
			duplicate.push(nums[i])//记录当前循环已经用过的值
			
		}
		duplicate.splice(0, duplicate.length)//循环结束后清空
	}
	for (let i = 0; i <= nums.length; i++) {
		let lastArr = [];
		dfs(nums, i, 0, lastArr, []);
	}
	return ans;
}

给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: candidates = [2,3,6,7], target = 7,
所求解集为:
[
  [7],
  [2,2,3]
]
示例 2:

输入: candidates = [2,3,5], target = 8,
所求解集为:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 //递归回溯
var combinationSum = function(candidates, target) {
		candidates.sort((a, b) => a - b);
		let ans = [], stack = [];
		let dfs = (candidate, target, ans, stack, start) => {
			if (target < 0) {
				return 
			}else if (target === 0) {
				stack = stack.slice();
				ans.push(stack);
				return
			}else {
				for(let i = start; i < candidate.length; i++) {
					stack.push(candidate[i]);
					dfs(candidate, target - candidate[i], ans, stack, i);
					stack.pop();
				}
			}
		}
		dfs(candidates, target, ans, stack, 0);
		return ans
};

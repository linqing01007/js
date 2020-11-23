给定一个字符串 S 和一个字符串 T，请在 S 中找出包含 T 所有字母的最小子串。

示例：

输入: S = "ADOBECODEBANC", T = "ABC"
输出: "BANC"
说明：

如果 S 中不存这样的子串，则返回空字符串 ""。
如果 S 中存在这样的子串，我们保证它是唯一的答案。

77.组合
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:

输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

//深度优先
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if (n < k) return [];
	let ans = [];
	let last = [];
	let combineF = (n, k, count, last, res) => {
		if (last.length === k) {
			let temp = last.slice()
			ans.push(temp);
			return
		}
		for (let i = count; i <= n; i++) {
			last.push(i);
			combineF(n, k, i + 1, last, res);
			last.pop(i);
		}
	}
	combineF(n, k, 1, last, ans)
	return ans;
};

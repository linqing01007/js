给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。

按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

"123"
"132"
"213"
"231"
"312"
"321"
给定 n 和 k，返回第 k 个排列。

说明：

给定 n 的范围是 [1, 9]。
给定 k 的范围是[1,  n!]。
示例 1:

输入: n = 3, k = 3
输出: "213"
示例 2:

输入: n = 4, k = 9
输出: "2314"

n 个数字有 n！种全排列，每种数字开头的全排列有 (n - 1)!种。 
所以用 k / (n - 1)! 就可以得到第 k 个全排列是以第几个数字开头的。 
用 k % (n - 1)! 就可以得到第 k 个全排列是某个数字开头的全排列中的第几个。

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let nums = [];
	for (let i = 1; i <= n; nums.push(i.toString()), i++);
	if (k === 1) {
		return nums.join("");
	}
	let fact = 1;
	for (let i = 2; i < n; i++) {
		fact *= i;
	}
	k -= 1;
	let round = n - 1;
	let ans = [];
	while (round >= 0) {
		let index = parseInt(k / fact);
		ans.push(nums[index]);
		nums.splice(index, 1);
		k = k % fact;
		if (round > 0) {
			fact /= round;
		}
		round -= 1;
	}
	return ans.join("")
};

给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

返回 s 所有可能的分割方案。

示例:

输入: "aab"
输出:
[
  ["aa","b"],
  ["a","a","b"]
]

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if (!s) {return false}
	let isPartitionS = function(s) {
		let rs = s.split("").reverse().join("");
		if (rs === s) {
			return true;
		}
		return false
	}
	let dfs = (s, start, out, res) => {
		if (start === s.length) {
			let temp = out.slice()
			res.push(temp);
			return
		}
		for (let i = start; i < s.length; i++) {
			if (isPartitionS(s.substring(start, i + 1))) {

				out.push(s.substr(start, i - start + 1))
				dfs(s, i + 1, out, res);
				out.pop()
			}
		}
	}
	let res = [];
	dfs(s, 0, [], res);
	return res
};

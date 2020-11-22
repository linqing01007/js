给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let expandRondLength = function(s, left, right) {
		while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
			left--;
			right++;
		}
		return right - left - 1;
	};
	if (s.length < 1) return ""
	let end = 0, start = 0;
	for (let i = 0; i < s.length; i++) {
		let len1 = expandRondLength(s, i, i);
		let len2 = expandRondLength(s, i, i + 1);
		let len = Math.max(len1, len2);
		if (len > (end - start)) {
			start = i - (len - 1) / 2;
			end = i + len / 2;
		}
	}
	return s.substring(Math.ceil(start), end + 1);
};

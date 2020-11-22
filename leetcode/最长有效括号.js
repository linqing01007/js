给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

示例 1:

输入: "(()"
输出: 2
解释: 最长有效括号子串为 "()"
示例 2:

输入: ")()())"
输出: 4
解释: 最长有效括号子串为 "()()"

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let res = 0, index = 0, stack = [];
		for (let i = 0; i < s.length; i++) {
			if (s[i] === "("){
				stack.push(i);
			}else if (stack.length < 1) {
				index = i + 1;
			}else {
				stack.pop();
				if (stack.length > 0) {
					res = Math.max(res, i - stack.slice(-1)[0]);
				}else {
					res = Math.max(res, i - index + 1);
				}
			}
		}
		return res;
};

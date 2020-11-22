给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

使用回溯算法
只有在我们知道序列仍然保持有效时才添加 '(' or ')'，而不是像方法一那样每次添加。我们可以通过跟踪到目前为止放置的左括号和右括号的数目来做到这一点，

如果我们还剩一个位置，我们可以开始放一个左括号。 如果它不超过左括号的数量，我们可以放一个右括号。
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = [];
		let blackstack = (s = "", left = 0, right = 0) => {
			if (s.length === 2 * n) {
				ans.push(s);
				return 
			}
			if (left < n) {
				blackstack(s + '(', left + 1, right);
			}
			if (right < left) {
				blackstack(s + ')', left, right + 1);
			}
		}
		blackstack();
		return ans;
};

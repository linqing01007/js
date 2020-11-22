给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"

/*
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a.length > b.length ? b = "0".repeat(a.length - b.length).concat(b) : a = "0".repeat(b.length - a.length).concat(a);
	let n = a.length - 1, flag = 0;
	let ans = [];
	while(n >= 0) {
		let sum = parseInt(a[n]) + parseInt(b[n]) + flag;
		if (sum > 1) {
			flag = 1;
			sum -= 2;
		}else {
			flag = 0;
		}
		ans.push(sum);
		n--;
	}
	if (flag) {
		ans.push(flag);
	}

	return ans.reverse().join("");
};

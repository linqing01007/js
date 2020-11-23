给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

示例:

输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let ans = [];
	let isValidIP = (indexArr, s) => {
    //indexArr存放 . 的位置，每次检测两个 . 之间的字符是否为有效ip
		let ip = [];
		let i = 1;
		while (i <= indexArr.length) {
			let index = indexArr[i];
			let temps = indexArr[i] ? s.slice(indexArr[i - 1], indexArr[i]) : s.slice(indexArr[i - 1]);
			if (parseInt(temps) > 255) { return false; }
			if (temps.length > 1 && temps[0] === '0') {return false;}
			ip.push(temps);
			i++;
		}
		return ip.join(".");
	}
	let dfs = (s, k, level, indexArr) => {
		if (indexArr.length === k + 1) {
			let ip = isValidIP(indexArr, s);
			if (ip) {
				ans.push(ip)
			}
			return 
		}
		for (let i = level; i < s.length; i++) {
			if (indexArr[indexArr.length - 1] < i - 3){ break; }//每两个点之间最多只有3位数
			indexArr.push(i);
			dfs(s, k, i + 1, indexArr);
			indexArr.pop(i);
		}
	}
	dfs(s, 3, 1, [0]);//3个点，从第一个字符开始分割，indexArr第一个元素为0是为了在检测ip里面更好的编写代码
	return ans
};

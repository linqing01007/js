给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

返回符合要求的最少分割次数。

示例:

输入: "aab"
输出: 1
解释: 进行一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串。


参考链接： https://blog.csdn.net/yutianzuijin/article/details/16850031

定义一个新的一维count数组，用来表示从位置i开始到最后的最小划分个数。这时有公式：
  count[i] = min(1 + count[j + 1]{i =< j < n}), dp[i][j] = 1
公式的含义是，从i开始的字符串的最小划分为：如果从位置i到位置j的子串是回文串，则从i开始的划分可以通过将i到j的子串看作划分的一部分，
然后加上从j+1位置开始的子串最小划分，并选择可能情况中的最小值即为从i开始的最小划分。
完成通项公式的构造，下一步是考虑计算顺序和初始化。由于count[i]依赖于比i更大的count元素，所以i循环应该倒序。j的取值范围从i到len-1，
正序和倒序均可。需要初始化的元素为最后一个count元素，其满足count[len]=0
--------------------- 
作者：yutianzuijin 
来源：CSDN 
原文：https://blog.csdn.net/yutianzuijin/article/details/16850031 
版权声明：本文为博主原创文章，转载请附上博文链接！
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const MAX_VALUE = Math.pow(2, 32) - 1;
    let dp = Array.from({length: s.length} , () => Array.from({length: s.length}, () => 0));
	let count = Array.from({length: s.length + 1}, () => 0);
	for (let i = s.length - 1; i >= 0; i--) {
		count[i] = MAX_VALUE;
		for (let j = i; j < s.length; j++) {
			if (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1] === 1)) {
				dp[i][j] = 1;
				count[i] = Math.min(1 + count[j + 1], count[i]);
			}
		}
	}
	return count[0] - 1;
};

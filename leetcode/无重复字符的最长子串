给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
     
自己的解答：
var lengthOfLongestSubstring = function(s) {
    if (!s) {
		return 0
	}
	let res = [], sum = 1, count = 1;
	for (let i = 0; i < s.length; i++) {
		res.push(s.charAt(i));
		for (let j = i + 1; j < s.length; j++) {
			if (res.indexOf(s.charAt(j)) === -1) {
				res.push(s.charAt(j));
				count += 1;
				sum = Math.max(sum, count)
			}else {
				count = 1;
				res = [];
				break;
			}
			
		}
	}
  /*
	移动窗口优化，可以理解为将i到j的字符串添加到arr中，如果第j+1个字符串出现在arr中，那么就将arr中该字符以及前面
	的所有元素去掉，这样arr的最大长度+1就是需要寻找的最大无重复子字符串
	
	let len = s.length, arr = [], num = 0, i = 0, j = 0;
	for (; j < len; j++) {
		if (arr.indexOf(s.charAt(j)) !== -1) {
			i = arr.lastIndexOf(s.charAt(j)) + 1;
			arr.splice(0, i);
		}
		num = Math.max(num, arr.length + 1);
		arr.push(s.charAt(j));
	}
  */

	return num;

	return sum;
};

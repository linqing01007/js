给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
示例 3：

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    /*
	设dp[i]表示s中前i个字符能否被拆分为wordDict,那么最终要求解的是dp[n]
	每求解一个dp[i],就在i前面寻找是否存在一个j，使得dp[j]为true且s[j: i - 1]在wordDict中
*/
/*
	let dp = Array.from({length: s.length + 1}, () => false);
	dp[0] = true;
	for (let i = 1; i <= s.length; i++) {
		for (let j = 0; j < i; j++) {
			if (dp[j] && (wordDict.indexOf(s.substr(j, i - j)) > -1)) {
				dp[i] = true;
				break
			}
		}
	}
	return dp[s.length];
*/
	
	//优化：在第二for循环中，不必每次都从0开始，因为wordDict中的字符串长度是有限的，所以每次从i-maxWordLength开始搜索就可以了
	let dp = Array.from({length: s.length + 1}, () => false);
	let maxWordLength = 0;
	wordDict.forEach(value => {
		maxWordLength = Math.max(value.length, maxWordLength);
	});
	dp[0] = true;
	for (let i = 1; i <= s.length; i++) {
		for (let j = Math.max(i - maxWordLength, 0); j < i; j++) {
			if (dp[j] && (wordDict.indexOf(s.substr(j, i - j)) > -1)) {
				dp[i] = true;
				break;
			}
		}
	}
	return dp[s.length]
};

给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。

说明：

分隔时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
输出:
[
  "cats and dog",
  "cat sand dog"
]
示例 2：

输入:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
输出:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
解释: 注意你可以重复使用字典中的单词。
示例 3：

输入:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
输出:
[]

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
	//要将s[0 : n-1]拆分，那么就从后向前寻找i使得s[i : n-1]在字典中，然后拆分s[0 : i-1]，将结果进行组合
	/*结果超时
	let temp = [];
	let findBreak = (s, wordDict) => {
		if (temp.indexOf(s) > -1) {
			return temp[s];
		}
		let res = [];
		for (let j = s.length - 1; j >= 0; j--) {
			let substr = s.substr(j);
			if (wordDict.indexOf(substr) > -1) {
				let prestr = s.substr(0, j);
				let preWords = findBreak(prestr, wordDict);
				
				for (let word of preWords) {
					res.push(word + " " + substr);
				}
				//print(">>>>>>>>>>>preWords", preWords, substr, res)
				if (j === 0) {
					res.push(substr);
				}
			}
		}
		temp[s] = res;
		return res;

	}
	let res = findBreak(s, wordDict)
	return res
	*/

	/*
	dp + dfs
	*/
    let check = (s, wordDict) => {
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
	}
	let ans = [];
	let dfs = (s, wordDict, strlist) => {
		if (check(s, wordDict)) {
			if (!s.length) {
				ans.push(strlist.slice(1))
				return
			}
			for (let i = 1; i < s.length + 1; i++) {
				if (wordDict.indexOf(s.substr(0, i)) > -1) {
					dfs(s.substr(i), wordDict, strlist + " " + s.substr(0, i))
				}
			}
		}
	}
	dfs(s, wordDict, "")
	return ans
};

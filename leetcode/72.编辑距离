给定两个单词 word1 和 word2，计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
示例 1:

输入: word1 = "horse", word2 = "ros"
输出: 3
解释: 
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
示例 2:

输入: word1 = "intention", word2 = "execution"
输出: 5
解释: 
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    //动态规划，定义f(i, j)表示将word1[:i]转化到word2[:j]所需的最小步数，那么当wrod1[i]===word2[j]时，有f(i, j) == f(i - 1, j - 1)；
	//当它们不等时，需要比较三种情况
	//1.insert: f(i, j - 1) + 1 保留从word1[0 ... i]转变到word2[0 ... j-1]的次数，加一
	//2.replace： f(i - 1, j - 1) + 1 保留从word1[0 ... i-1]转变到word2[0 ... j-1]的次数，再加一，加一指的是本次的修改
	//3.delete: f(i - 1, j) + 1 保留从word1[0 ... i-1]转变到word2[0 ... j]的次数，加一
	//最后的结果应当为三种情况中最小者
    let length1 = word1.length, length2 = word2.length;
	let dp = Array.from({ length: length1 + 1 }, () => Array.from({ length: length2 + 1 }, () => 0));
	for (let i = 1; i <= length1; i++) {
		dp[i][0] = i;
	}
	for (let i = 1; i <= length2; i++) {
		dp[0][i] = i;
	}
	for (let i = 1; i <= length1; i++) {
		for (let j = 1; j <= length2; j++) {
			let replace = word1[i - 1]=== word2[j - 1] ? dp[i - 1][j - 1] : dp[i - 1][j - 1] + 1;
			let ins_del = Math.min(dp[i][j - 1] + 1, dp[i - 1][j] + 1);
			dp[i][j] = Math.min(replace, ins_del)
		}
	}
	return dp[length1][length2]
};

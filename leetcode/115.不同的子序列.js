// 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

// 字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

// 题目数据保证答案符合 32 位带符号整数范围。

//  

// 示例 1：

// 输入：s = "rabbbit", t = "rabbit"
// 输出：3
// 解释：
// 如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
// (上箭头符号 ^ 表示选取的字母)
// rabbbit
// ^^^^ ^^
// rabbbit
// ^^ ^^^^
// rabbbit
// ^^^ ^^^
// 示例 2：

// 输入：s = "babgbag", t = "bag"
// 输出：5
// 解释：
// 如下图所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
// (上箭头符号 ^ 表示选取的字母)
// babgbag
// ^^ ^
// babgbag
// ^^    ^
// babgbag
// ^    ^^
// babgbag
//   ^  ^^
// babgbag
//     ^^^

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/distinct-subsequences
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

/*
  m，n分别表示字符串s，t的长度
  动态规划，用dp[i][j] 表示s[i:]的子序列中t[j:]出现的个数
  考虑边界条件
  1 当j=n时，t为空字符串，空字符是任意字符串的子串，所以对于0<i<=m，有dp[i][n] = 1
  2 当i=m时，s为空字符串，t不为空字符串，所以对于0<j<=n，有dp[m][j]=0
  当0<i<m且0<j<n时，考虑s[i]和t[j]情况
  当s[i]=t[j]时，dp[i][j]由两部分组成：
    1 当s[i]和t[j]匹配时，则考虑t[j+1:]作为s[i+1:]的子序列，子序列数为dp[i+1]dp[j+1]
    2 当s[i]不和t[j]匹配时，则考虑t[j:]作为s[i+1:]的子序列，子序列数为dp[i+1]dp[j]
    因此当s[i]=t[j]时，dp[i][j]=dp[i+1]dp[j+1]+dp[i+1]dp[j]
  当s[i]!=t[j]时，s[i]不能和t[j]匹配，因此只考虑t[j:]作为s[i+1:]的子序列，子序列数为dp[i+1][j]
  因此当s[i]!=t[j]时，有dp[i][j] = dp[i+1][j]
*/
 var numDistinct = function(s, t) {
  const m = s.length, n = t.length
  if (m < n) return 0
  const dp = Array(m+1).fill(0).map(() => Array(n+1).fill(0))
  for (let i = m - 1; i >= 0; i--) {
    dp[i][n] = 1
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s[i] == t[j]) {
        dp[i][j] = dp[i+1][j+1] + dp[i+1][j]
      } else {
        dp[i][j] = dp[i+1][j]
      }
    }
  }
  return dp[0][0]
};
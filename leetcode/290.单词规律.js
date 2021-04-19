// 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

// 示例1:

// 输入: pattern = "abba", str = "dog cat cat dog"
// 输出: true
// 示例 2:

// 输入:pattern = "abba", str = "dog cat cat fish"
// 输出: false
// 示例 3:

// 输入: pattern = "aaaa", str = "dog cat cat dog"
// 输出: false
// 示例 4:

// 输入: pattern = "abba", str = "dog dog dog dog"
// 输出: false
// 说明:
// 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。 

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/word-pattern
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  // 用两个map分别建立pattern与str的对应关系
  s = s.split(' ')
  if (s.length !== pattern.length) return false
  const patternToS = new Map(), sToPattern = new Map()
  for (let i = 0; i < pattern.length; i++) {
    const charS = s[i], charP = pattern[i]
    // console.log('1111111', patternToS, sToPattern)
    // if (patternToS.has(charP)) {
    //   if (s[i] !== patternToS.get(charP)) return false
    // } else {
    //   patternToS.set(charP, charS)
    // }
    // if (sToPattern.has(charS)) {
    //   if (pattern[i] !== sToPattern.get(charS)) return false
    // } else {
    //   sToPattern.set(charS, charP)
    // }
    // 上面几个判断的等价写法
    if (patternToS.has(charP) && s[i] !== patternToS.get(charP)) return false
    if (sToPattern.has(charS) && pattern[i] !== sToPattern.get(charS)) return false
    patternToS.set(charP, charS)
    sToPattern.set(charS, charP)
  }
  // console.log(patternToS, sToPattern)
  return true
};

const p = 'aaaa', s = 'dog dog dog dog'
console.log(wordPattern(p, s))

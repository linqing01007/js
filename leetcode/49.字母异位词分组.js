// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

// 示例:

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// 说明：

// 所有输入均为小写字母。
// 不考虑答案输出的顺序。

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 //先排列，然后再计算
var groupAnagrams = function(strs) {
  let strsSort = strs.map(str => {
		return str.split("").sort().join("");
	})
	let ans = {};
	for (let i = 0; i < strsSort.length; i++) {
		if (ans.hasOwnProperty(strsSort[i])) {
			ans[strsSort[i]].push(strs[i]);
		}else {
			ans[strsSort[i]] = [strs[i]];
		}
	}
	let res = [];
	for (let key of Object.keys(ans)) {
		res.push(ans[key])
	}
	return res;
};




// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

// 示例:

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// 说明：

// 所有输入均为小写字母。
// 不考虑答案输出的顺序。

const groupAnagrams2 = function (strs) {
  const map = new Map()
  for (let s of strs) {
    let counts = Array(26).fill(0)
    for (let i in s) {
      // 字母异位词的key是相同的，可作为map的key值
      let index = s.charCodeAt(i)
      counts[index-97] += 1
    }
    let key = ''
    counts.forEach((value, ind) => {
      if (value > 0) {
        const char = String.fromCharCode(ind+97)
        key += char + value.toString()
      }
    })
    let res = map.get(key) || []
    res.push(s)
    map.set(key, res)
  }
  let res = []
  for (let e of map.values()) {
    res.push(e)
  }
  // console.log(map)
  return res
}
const i = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams2(i))

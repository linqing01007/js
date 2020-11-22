给定两个字符串 s 和 t，判断它们是否是同构的。

如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。

示例 1:

输入: s = "egg", t = "add"
输出: true
示例 2:

输入: s = "foo", t = "bar"
输出: false
示例 3:

输入: s = "paper", t = "title"
输出: true
说明:
你可以假设 s 和 t 具有相同的长度。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map1 = [], map2 = [];//建立两个具有一对一映射关系的数组
	for (let i = 0; i < s.length; i++) {
		let tempS = s[i], tempT = t[i];
		let indexS = map1.indexOf(tempS);
		if (indexS > -1 && map2[indexS] !== t[i]) {
			return false;
		}
		if (indexS === -1) {
			if (map2.indexOf(tempT) > -1) {
				return false;
			}else {
				map1.push(tempS);
				map2.push(tempT);
			}
		}
	}
	return true;
};

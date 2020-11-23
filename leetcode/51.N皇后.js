n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

示例:

输入: 4
输出: [
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let ans = [];
	let isValidQueen = (m, i) => {
	//八个皇后能放下一定是一行放一个，我们只需一个数组记录每个皇后的列数（默认第N个放第N行），
	//那么问题就被抽象成了数组的第N个数和前N-1个数不存在几个和差关系即可（比如差不为零代表不在同一列）
		for (let k = 0; k < m; k++) {
			if (square[k] === i || Math.abs(square[k] - i) === Math.abs(m - k)) {
				return false
			}
		}
		return true
	}
	let queen = (square, m) => {
		if (m >= n) {

			let temp = square.map(value => {
				let str = "";
				for (let i = 0; i < n; i++) {
					if (i == value) {
						str += "Q";
					}else {
						str += ".";
					}
				}
				return str;
			});
			ans.push(temp);
			return
		}
		for (let i = 0; i < n; i++) {
			square[m] = i;
			if (isValidQueen(m, i)) {
				queen(square, m + 1);
			}
		}
		//如果当前没找到则说明上一个皇后位置不对
		square.pop();
	}
	let square = [];
	queen(square, 0)
	return ans;
};

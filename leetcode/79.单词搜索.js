给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

示例:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true.
给定 word = "SEE", 返回 true.
给定 word = "ABCB", 返回 false.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    //深度搜索优先
	let search = (board, i, j, word, idx) => {
		if (board.length === 0) {return false;}
		if (idx >= word.length) { return true; }
		if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== word[idx]) { return false }
		let temp = board[i][j];
		board[i][j] = -1;
		let res = search(board, i + 1, j, word, idx + 1) || search(board, i - 1, j, word, idx + 1) ||
				  search(board, i, j + 1, word, idx + 1) || search(board, i, j - 1, word, idx + 1);
		board[i][j] = temp;
		return res;
	}
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			let res = search(board, i, j, word, 0);
			if (res) { return true; }
		}
	}
	return false;
};

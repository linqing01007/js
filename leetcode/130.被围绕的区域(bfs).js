// 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。

// 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

// 示例:

// X X X X
// X O O X
// X X O X
// X O X X
// 运行你的函数后，矩阵变为：

// X X X X
// X X X X
// X X X X
// X O X X
// 解释:

// 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board.length || !board[0].length) {return board}
    let dxy = [[0, 1], [0, -1], [1, 0], [-1, 0]];
	let bfs = (board, x, y) => {
		let m = board.length;
		let n = board[0].length;
		if (isInBoard(m, n, x, y) && board[x][y] === "O") {
			board[x][y] = "*";
			dxy.forEach(value => {
				let nx = x + value[0];
				let ny = y + value[1];
				bfs(board, nx, ny);
			})
		}
	}
	let isInBoard = (m, n, x, y) => {
		if (x >= 0 && x < m && y >= 0 && y < n) {
			return true;
		}
		return false;
	}
	let m = board.length, n = board[0].length;
	for (let i = 0; i < m; i++) {
		bfs(board, i, 0);
		bfs(board, i, n - 1);
	}
	for (let i = 0; i < n; i++) {
		bfs(board, 0, i);
		bfs(board, m - 1, i);
	}
	for (let i = 0; i < m; i++) {
		for (let j = 0; j <n; j++) {
			if (board[i][j] === "*") {
				board[i][j] = "O";
			}else {
				board[i][j] = "X";
			}
		}
	}
	return board
};

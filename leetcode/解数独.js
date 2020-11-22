编写一个程序，通过已填充的空格来解决数独问题。

一个数独的解法需遵循如下规则：

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
空白格用 '.' 表示。

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if (board[i][j] === "."){
					board[i][j] = 0;
				}else {
					board[i][j] = parseInt(board[i][j]);
				}
			}
		}
		let check20Grid = (board, i, j) => {
			let row = {}, col = {}, grid = {};
			for (let k = 0; k < 9; k++) {
				let cur1 = board[i][k], cur2 = board[k][j];
				if (row[cur1]) {
					return 1;
				}else {
					row[cur1] = cur1;
				}
				if (col[cur2]) {
					return 2;
				}else {
					col[cur2] = cur2;
				}
				let key = board[Math.floor(i / 3) * 3 + Math.floor(k / 3)][Math.floor(j / 3) * 3 + Math.floor(k % 3)];
				if (grid[key]) {
					return 3;
				}else {
					grid[key] = key;
				}
			}
			return 0;
		}
		let findAnswer = (board) => {
			let stack = [], flag = false;
			for (let i = 0; i < 9; i++) {
				for (let j = 0; j < 9;) {
					if (board[i][j] === 0 || flag) {
						flag = false;
						let k = board[i][j] + 1;
						while (k < 10) {
							board[i][j] = k;
							if (check20Grid(board, i, j) === 0) {
								stack.push([i, j++]);
								break;
							}
							k++;
						}
						if (k > 9) {
							board[i][j] = 0;
							let rt = stack.pop();
							if (!rt) {
								return 0;
							}
							i = rt[0];
							j = rt[1];
							flag = true;
						}
					}else {
						j++;
					}
				}
			}
			return 1;
		}
		findAnswer(board);
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				board[i][j] = board[i][j].toString();
			}
		}
		return board;
   
};

给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

示例 1:

输入:
11110
11010
11000
00000

输出: 1
示例 2:

输入:
11000
11000
00100
00011

输出: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let nums = 0;
	let count = (i, j) => {
		if (i >= 0 && j >= 0 && i < grid.length && j < grid[0].length && grid[i][j] === "1") {
			grid[i][j] += 1;
			count(i - 1, j);
			count(i, j - 1);
			count(i + 1, j);
			count(i, j + 1);
		}
	}
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === "1") {
				
				count(i, j);
				nums++;
			}
		}
	}
	
	return nums;
};

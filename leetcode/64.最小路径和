给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例:

输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。
动态规划： cost[i][j] = min(cost[i][j - 1] + grid[i][j], cost[i - 1][j] + grid[i][j]);
特别地，第一行的最小路径和只能从左边向右移动，所以grid[0][j] = grid[0][j] + grid[0][j-1]；
第一列的最小路径和只能从上到下移动，所以grid[j][0] = grid[j][0] + grid[j-1][0].
/*
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i === 0 && j > 0) {
				grid[i][j] += grid[i][j - 1];
			}else if (j === 0 && i > 0) {
				grid[i][j] += grid[i - 1][j];
			}else if (j > 0 && i > 0) {
				grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
			} 
		}
	}
	return grid[m - 1][n - 1]
};

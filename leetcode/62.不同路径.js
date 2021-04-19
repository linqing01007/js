// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

// 问总共有多少条不同的路径？
// 说明：m 和 n 的值均不超过 100。

// 示例 1:

// 输入: m = 3, n = 2
// 输出: 3
// 解释:
// 从左上角开始，总共有 3 条路径可以到达右下角。
// 1. 向右 -> 向右 -> 向下
// 2. 向右 -> 向下 -> 向右
// 3. 向下 -> 向右 -> 向右

// 有四个点时，到c和b的路径数都是1，到d点的路径数为2，到d点的路径数与到c和b的路径数有关，就是到c和b的路径数和

// 然后依次类推，可以得到动态方程dp[i][j]=dp[i-1][j]+dp[i][j-1](i>0,j>0) 和dp[0][0]=1；
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let grid = Array.from({length: n}, () => 1);
	for (let i = 1; i < m; i++) {
		//grid[0] = 1;
		for (let j = 1; j < n; j++) {
			grid[j] += grid[j - 1];
		}
		
	}
	return grid[n - 1];
};



const uniquePath2 = function (m, n) {
  // 定义dp[i][j]为走到坐标(i,j)的路径数，则有dp[i][j] = dp[i-1][j] + dp[i][j-1]
  const dp = Array.from({length: m}, () => Array(n).fill(1))
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++){
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[m-1][n-1]
}
console.log(uniquePaths(2, 1))
console.log(uniquePath2(2, 1))

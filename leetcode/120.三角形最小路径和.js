给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

例如，给定三角形：

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

说明：

如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    //从小往上的最小路径 使用动态规划的表达dp[i][j]= data[i][j]+ min(dp[i+1][j],dp[i+1][j] )
	//使用O(n)空间从后往前迭代
	if(!triangle || !triangle.length) {
		return 0;
	}
	let dp = Array.from({ length: triangle.length + 1}, () => 0);
	for (let i = triangle.length - 1; i >= 0; i--) {
		let curTr = triangle[i];
		for (let j = 0; j < curTr.length; j++) {
			//这里的dp[j] 使用的时候默认是上一层的，赋值之后变成当前层
			dp[j] = Math.min(dp[j], dp[j + 1]) + curTr[j]
		}
	}
	return dp[0];
};

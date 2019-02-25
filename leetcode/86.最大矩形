给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

示例:

输入:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
输出: 6

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    /*84题的变形
	将二位矩阵中的每一行构建成一个84题中的矩阵，方法：
	遇到0则直接设为0,1则用1加上上一层累加的值
	最后计算每一层的最大矩阵值
	*/
    if(!matrix.length){return 0}
	let heights = Array.from({length: matrix.length}, () => Array.from({length: matrix[0].length}, () => 0));
	for (let i = 0; i < matrix[0].length; i++) {
		heights[0][i] = parseInt(matrix[0][i]);//第一行直接复制过来
	}
	let largestRectangleArea = (heights) => {
		let stack = [], maxArea = 0;
		heights.push(0)
		for(let i = 0; i < heights.length; i++) {
			while(stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
				let top = stack.pop();
				maxArea = Math.max(maxArea, heights[top] * (stack.length < 1 ? i : (i - stack[stack.length - 1] - 1)))
			}
			stack.push(i);


		}
		return maxArea;
	}
	let res = largestRectangleArea(heights[0]);
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++){
			if (matrix[i][j] === '1') {
				heights[i][j] = parseInt(heights[i - 1][j]) + 1;
			}
		}
		res = Math.max(res, largestRectangleArea(heights[i]));
	}
	return res
};

给定一个 n × n 的二维矩阵表示一个图像。

将图像顺时针旋转 90 度。

说明：

你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

示例 1:

给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

//先x轴对称转换，然后再对角线转换

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let swap = (arr, i, j) => {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length / 2; j++) {
			let k = matrix[i].length - 1 - j;
			swap(matrix[i], k, j);
		}
	}
	//return matrix
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length - i - 1; j++) {
			let m = matrix.length - 1 - j;
			let n = matrix[i].length - 1 - i;
			let temp = matrix[i][j];
			matrix[i][j] = matrix[m][n];
			matrix[m][n] = temp;
		}
	}
	return matrix
};

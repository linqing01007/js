编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。
示例 1:

输入:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
输出: true
示例 2:

输入:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
输出: false

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 //将矩阵看做是一个一维数组,然后用二分查找
var searchMatrix = function(matrix, target) {
    if (!matrix.length) return false;
	let m = matrix.length, n = matrix[0].length;
	let i = 0, j = m * n;
	while(i < j) {
		let mid = parseInt((i + j) / 2);
		if (matrix[parseInt(mid / n)][mid % n] === target) {
			return true
		}else if (matrix[parseInt(mid / n)][mid % n] < target) {
			i = mid + 1;
		}else {
			j = mid;
		}
	}
	return false;
};

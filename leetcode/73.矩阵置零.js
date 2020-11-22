给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

示例 1:

输入: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2:

输入: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let setZeroe = (matrix, i, j) => {
		for (let m = 0; m < matrix[i].length; m++) {
			matrix[i][m] = 0;
		}
		for (let m = 0; m < matrix.length; m++) {
			matrix[m][j] = 0;
		}
	}
	
	let zeroPos = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 0) {
				zeroPos.push([i, j]);
			}
		}
	}
	if (zeroPos.length) {
		for (let i = 0; i < zeroPos.length; i++) {
			let pos = zeroPos[i];
			setZeroe(matrix, pos[0], pos[1])
		}
	}
	//setZeroe(matrix, 1, 1)
	return matrix;
};

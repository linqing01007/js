给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:

输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let left = 0, up = 0, right = n - 1, down = n - 1;
	let matrix = Array.from({ length: n }, () => []);
	let j = 1;
	while (true) {
		for (let i = left; i <= right; i++, j++) {
			matrix[up][i] = j;
		}
		up += 1;
		if (up > down) { break; }
		for (let i = up; i <= down; i++, j++) {
			matrix[i][right] = j;
		}
		right -= 1;
		if (right < left) { break; }
		for (let i = right; i >= left; i--, j++) {
			matrix[down][i] = j;
		}
		down -= 1;
		if (down < up) { break; }
		for (let i = down; i >= up; i--, j++) {
			matrix[i][left] = j;
		}
		left += 1;
		if (left > right) { break; }
	}
	return matrix;
};

给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 /*
 对于这种螺旋遍历的方法，重要的是要确定上下左右四条边的位置，那么初始化的时候，上边up就是0，下边down就是m-1，左边left是0，右边right是n-1。
 然后我们进行while循环，先遍历上边，将所有元素加入结果res，然后上边下移一位，如果此时上边大于下边，说明此时已经遍历完成了，直接break。
 同理对于下边，左边，右边，依次进行相对应的操作，这样就会使得坐标很有规律，并且不易出错
 */
var spiralOrder = function(matrix) {
    if (matrix.length < 1) {return []}
    let ans = [];
	let up = 0, down = matrix.length - 1, left = 0, right = matrix[0].length - 1;
	while (true) {
		for (let i = left; i <= right; i++) {
			ans.push(matrix[up][i]);
		}
		up += 1;
		if (up > down) { break; }
		for (let i = up; i <= down; i++) {
			ans.push(matrix[i][right]);
		}
		right -= 1;
		if (right < left) { break; }
		for (let i = right; i >= left; i--) {
			ans.push(matrix[down][i]);
		}
		down -= 1;
		if (down < up) { break; }
		for (let i = down; i >= up; i--) {
			ans.push(matrix[i][left]);
		}
		left += 1;
		if (left > right) { break; }

	}
	return ans;
};

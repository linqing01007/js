// 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

// 每行中的整数从左到右按升序排列。
// 每行的第一个整数大于前一行的最后一个整数。


// 提示：

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/search-a-2d-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  const rowIndex = binarySearchFirstColumn(matrix, target);
  if (rowIndex < 0) {
      return false;
  }
  return binarySearchRow(matrix[rowIndex], target);
};

const binarySearchFirstColumn = (matrix, target) => {
  let low = -1, high = matrix.length - 1;
  while (low < high) {
      const mid = Math.floor((high - low + 1) / 2) + low;
      if (matrix[mid][0] <= target) {
          low = mid;
      } else {
          high = mid - 1;
      }
  }
  return low;
}

const binarySearchRow = (row, target) => {
  let low = 0, high = row.length - 1;
  while (low <= high) {
      const mid = Math.floor((high - low) / 2) + low;
      if (row[mid] == target) {
          return true;
      } else if (row[mid] > target) {
          high = mid - 1;
      } else {
          low = mid + 1;
      }
  }
  return false;
};

let matrix = [
  [1,3,5,7, 8],
  [10,11,16,20, 21],
  [23,30,34,60, 88]
]
let target = 11
console.log(searchMatrix(matrix, target))

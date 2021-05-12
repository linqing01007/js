// 有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = [Li, Ri]。

// 对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为本次查询的结果。

// 并返回一个包含给定查询 queries 所有结果的数组。

//  

// 示例 1：

// 输入：arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
// 输出：[2,7,14,8] 
// 解释：
// 数组中元素的二进制表示形式是：
// 1 = 0001 
// 3 = 0011 
// 4 = 0100 
// 8 = 1000 
// 查询的 XOR 值为：
// [0,1] = 1 xor 3 = 2 
// [1,2] = 3 xor 4 = 7 
// [0,3] = 1 xor 3 xor 4 xor 8 = 14 
// [3,3] = 8
// 示例 2：

// 输入：arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
// 输出：[8,0,4,4]
//  

// 提示：

// 1 <= arr.length <= 3 * 10^4
// 1 <= arr[i] <= 10^9
// 1 <= queries.length <= 3 * 10^4
// queries[i].length == 2
// 0 <= queries[i][0] <= queries[i][1] < arr.length

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/xor-queries-of-a-subarray
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
  let res = []
  for (let query of queries) {
    let item = 0
    for (let i = query[0]; i <= query[1]; i++) {
      item ^= arr[i]
    }
    res.push(item)
  }
  // console.log(res)
  return res
  // 官方题解：计算arr的前缀异或，定义长度为n+1的数组xors,xors[i]表示arr前i-1个元素的异或值
  // 那么对于任意一个查询Q(left, right),当left为0时，结果为xors[right+1],当left不为0时，有
  // Q(left, right) = a[left]^a[left + 1]...a[right] = (a[0]^a[1]...a[left - 1])^(a[0]^a[1]...a[left - 1])^(a[left]^a[left + 1]...a[right]) = (a[0]^a[1]...a[left - 1])^(a[0]^a[1]...a[left - 1]^a[left]^a[left + 1]...a[right]) = xors[left] ^ xors[right+1],所以对于每个查询，时间复杂度为O(1)
};
const arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
xorQueries(arr, queries)

// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）
// 提示：

// 树中的节点数为 n 。
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104
//  

// 进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const { createTree } = require('./util/tree')
 var kthSmallest = function(root, k) {
  // 中序遍历
  let count = 1
  let p = root
  let stack = []
  while (p || stack.length) {
    if (p) {
      stack.push(p)
      p = p.left
    } else {
      let node = stack.pop()
      if (count === k) {
        return node.val
      }
      count += 1
      p = node.right
    }
  }
};
let inputArr =  [5,3,6,2,4,null,null,1]
let root = createTree(inputArr)
console.log(kthSmallest(root, 4))

// 给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。

// 输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
// 输出：32

// 输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// 输出：23

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const { createTree } = require('./util/tree')
 var rangeSumBST = function(root, low, high) {
  const dfs = function (root) {
    if (!root) return 0
    let sum = 0
    if (root.left && root.val >= low) {
      sum += dfs(root.left)
    }
    // console.log(root.val)
    if (root.val >= low && root.val <= high) {
      sum += root.val
    }
    if (root.right && root.val <= high) {
      sum += dfs(root.right)
    }
    return sum
  }
  return dfs(root)
  // return sum
};
const i = createTree([10,5,15,3,7,13,18,1,null,6])
console.log(rangeSumBST(i, 6, 10))

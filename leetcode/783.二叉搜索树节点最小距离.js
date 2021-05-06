// 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。

// 注意：本题与 530：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/ 相同

//  输入：root = [4,2,6,1,3]
// 输出：1
// 输入：root = [1,0,48,null,null,12,49]
// 输出：1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes
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
 * @return {number}
 */
const createTree = require('./util/tree.js').createTree
var minDiffInBST = function(root) {
  // 二叉搜索树的中序遍历是一个升序数组，且两节点的最小距离必定是相邻的两个节点
  if (!root) return 0
  let minimum = Number.MAX_SAFE_INTEGER, lastVal = null
  const dfs = function (root) {
    if (!root) return
    if (root.left) {
      dfs(root.left)
    }
    if (lastVal) {
      minimum = Math.min(minimum, root.val - lastVal)
    }
    lastVal = root.val
    if (root.right) {
      dfs(root.right)
    }
  }
  dfs(root)
  return minimum
};

const root = createTree([5,1,48,null,null,12,58])
console.log(minDiffInBST(root))

// 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回锯齿形层序遍历如下：

// [
//   [3],
//   [20,9],
//   [15,7]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// [1,2,3,4,null,null,5]
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  // 广度优先搜索，用一个标志位判断是从左往右还是从右往左
  if (!root) return []
  let flag = 1
  let res = []
  let stack = [root]
  while (stack.length) {
    let nextLevel = []
    let curRes = []
    while (stack.length) {
      let curNode = stack.shift()
      if (curNode.left) {
        nextLevel.push(curNode.left)
      }
      if (curNode.right) {
        nextLevel.push(curNode.right)
      }
      if (flag % 2 === 0) {
        curRes.push(curNode.val)
      } else {
        curRes.unshift(curNode.val)
      }
    }
    stack = nextLevel
    flag += 1
    res.push(curRes)
  }
  return res
}

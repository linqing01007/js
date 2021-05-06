// 给你一棵二叉搜索树，请你 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。

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
 * @return {TreeNode}
 */
 var increasingBST = function(root) {
  // 先遍历，然后再创建
  // const res = []
  // let stack = []
  // let p = root
  // while (p || stack.length) {
  //   if (p) {
  //     stack.push(p)
  //     p = p.left
  //   } else {
  //     let cur = stack.pop()
  //     res.push(cur.val)
  //     p = cur.right
  //   }
  // }
  // let length = res.length - 1
  // let node = new TreeNode(res[length])
  // for (let i = length - 1; i >= 0; i--) {
  //   let cur = new TreeNode(res[i])
  //   cur.right = node
  //   node = cur
  // }
  // return node
  const dfs = function (root) {
    if (!root) return
    if (root.left) {
      let left = dfs(root.left)
    }
    left.right = root
    root.left = null
    if (root.right) {
      let right = dfs(root.right)
    }
  }
};
给定一个二叉树，返回它的中序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
	//非递归算法,使用栈
	let stack = [], cur = root;
	let list = [];
	while(cur || stack.length) {
		if (cur) {
			stack.push(cur);
			cur = cur.left;
		}else {
			cur = stack.pop();
			list.push(cur.val);
			cur = cur.right;
		}
	}
	return list
  
  
	//递归算法
	let list = [];
	let inorder = function(root, list) {
        if(!root) {return list}
		if (root.left) {
			inorder(root.left, list)
		}
		list.push(root.val);
		if (root.right) {
			inorder(root.right, list);
		}
	}
	inorder(root, list)
	return list
};

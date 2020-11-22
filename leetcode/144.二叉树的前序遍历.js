给定一个二叉树，返回它的 前序 遍历。

 示例:

输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [1,2,3]

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
var preorderTraversal = function(root) {
	//递归
	let preorderRecu = (root, list) => {
		if (!root) { return list }
		ans.push(root.val)
		if (root.left) {
			preorder(root.left)
		}
		if (root.right) {
			preorder(root.right);
		}
		return list
	}
	//非递归
    let preorderIter = (root, list) => {
		let pNode = root;
		let stack = []
		while(stack.length || pNode) {
			if (pNode) {
				list.push(pNode.val);
				stack.push(pNode);
				pNode = pNode.left;
			}else {
				let preNode = stack.pop();
				pNode = preNode.right;
			}
		}
		return list
	}
	let ans = []
	preorderIter(root, ans)
	return ans
};

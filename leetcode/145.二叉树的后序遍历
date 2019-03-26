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
var postorderTraversal = function(root) {
    //递归
	let postorderRecu = (root, list) => {
		if (!root) {return list }
		if (root.left) {
			postorderRecu(root.left, list)
		}
		if (root.right) {
			postorderRecu(root.right, list)
		}
		
		list.push(root.val);
		return list;
	}
	let ans = [];
	postorderRecu(root, ans);
	return ans
};

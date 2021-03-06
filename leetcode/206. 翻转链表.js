反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    //非递归
	/*
	let cur = head, q = null;
	while(cur) {
		let temp = cur.next;
		cur.next = q;
		q = cur;
		cur = temp;
	}
	//return q;
	*/
	//递归
	let recursive = (pre, cur) => {
		if (!cur.next) {
			cur.next = pre;
			return cur;
		}
		let temp = cur.next;
		cur.next = pre;
		pre = cur;
		cur = temp;
		return recursive(pre, cur)
	}
	let res = recursive(null, head);
	return res;
};

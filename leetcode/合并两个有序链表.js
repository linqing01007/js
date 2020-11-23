将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4


/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let p = l1, q = l2;
		let ans = new ListNode(0);
		let k = ans;
		while (p || q) {
			if (!p) {
				k.next = q;
				break;
			}
			if (!q) {
				k.next = p;
				break;
			}
			if (p.val > q.val) {
				k.next = new ListNode(q.val);
				k = k.next;
				q = q.next;
			}else {
				k.next = new ListNode(p.val);
				k = k.next;
				p = p.next;
			}
		}
		return ans.next;
};

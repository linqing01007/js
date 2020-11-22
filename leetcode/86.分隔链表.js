给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。

示例:

输入: head = 1->4->3->2->5->2, x = 3
输出: 1->2->2->4->3->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    //用一个新链表存储小于x的节点,另一个存储大于等于x的节点
	let small = new ListNode(0);
	let large = new ListNode(0);
	let ph = head, ps = small, pl = large;
	while(ph) {
		if (ph.val < x) {
			ps.next = ph;
			ps = ps.next;
			pl.next = null;
		}else {
			pl.next = ph;
			pl = pl.next;
			ps.next = null
		}
		ph = ph.next;
	}
	ps.next = large.next;
	return small.next;
};

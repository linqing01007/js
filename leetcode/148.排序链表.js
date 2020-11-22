在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

示例 1:

输入: 4->2->1->3
输出: 1->2->3->4
示例 2:

输入: -1->5->3->4->0
输出: -1->0->3->4->5

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
var sortList = function(head) {
    /*
	使用归并排序，思路：1.使用快慢指针，一个一次走两步，一个一次走一步，当快指针到达末尾时，满指针达到链表中间；
	2.对这两个链表进行归并排序

	*/
	let merge = (l, r) => {
		let hp = new ListNode(0);
		let cur = hp;
		while(l && r) {
			if (l.val < r.val) {
				cur.next = l;
				l = l.next;
			}else {
				cur.next = r;
				r = r.next;
			}
			cur = cur.next;
		}
		if (l) {
			cur.next = l;
		}
		if (r) {
			cur.next = r;
		}
		return hp.next;
	};
	let sort = (head) => {
		if(!head.next) { return head; }
		let fast = head, slow = head;
		let pre = head;
		while(fast && fast.next) {
			pre = slow;
			fast = fast.next.next;
			slow = slow.next;
		}
		pre.next = null;
		let l = sort(head);
		let r = sort(slow);
		return merge(l, r);
	}
	if(!head) { return head; }
	return sort(head)
};

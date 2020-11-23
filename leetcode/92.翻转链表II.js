反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (m === n) {return head}
	let count = 1, p = head;
	let reverseNode = null, reverseEndNode = null, pre = null;
	while(p) {
		if (count > n) { break; }
		if (count === m) {
			//翻转之后，reverseEndNode指向翻转链表部分的最后一个
			reverseEndNode = p;
		}else if (count === m - 1) {
			pre = p;
		}
		if (count >= m && count <= n) {
			//用reverseNode保存已经翻转的链表
			let temp = p;
			p = p.next;
			temp.next = reverseNode;
			reverseNode = temp;

		}else {
			p = p.next;
		}
		count += 1;

	}
	reverseEndNode.next = p;
	if (pre) {
		pre.next = reverseNode;
		return head;
	}else {
		//pre为null说明m == 1，此时直接返回翻转后的链表
		return  reverseNode;
	}
		
};

给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

示例 1:

输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:

输入: 1->1->1->2->3
输出: 2->3
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
var deleteDuplicates = function(head) {
    //使用哈希表
    let map = {};
	let dummyHead = head;
	while(dummyHead) {
		let value = dummyHead.val;
		map[value] = map[value] ? map[value] + 1 : 1;
		dummyHead = dummyHead.next;
	}
	dummyHead = new ListNode(0);
	let cur = head, pre = dummyHead;
	pre.next = null;
	while(cur) {
		let value = cur.val;
		if (map[value] === 1) {
			pre.next = cur;
			pre = pre.next;
		}else {
			pre.next = null;
		}
		cur = cur.next
	}
	return dummyHead.next
};

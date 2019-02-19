给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
示例 2:

输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL
解释:
向右旋转 1 步: 2->0->1->NULL
向右旋转 2 步: 1->2->0->NULL
向右旋转 3 步: 0->1->2->NULL
向右旋转 4 步: 2->0->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    const rotateOnce = (head) => {
		let dummyHead = head;
		let p = dummyHead;
		let preEnd = null, end = null;
		while (true) {
			
			if (p.next && !p.next.next) {
				preEnd = p;
			}
			if (p && !p.next) {
				end = p;
				break
			}
            p = p.next;
		}
		end.next = dummyHead;
		preEnd.next = null;
		return end;
	}
	let dummyHead = head, length = 0;
	while(dummyHead) {
		dummyHead = dummyHead.next;
		length += 1;
	}
	k = k % length;
	while(k > 0) {
		head = rotateOnce(head);
		k--;
	}
	return head;
};

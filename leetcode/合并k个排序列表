合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6

使用的是归并排序算法，自顶向下递归。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    let mergeTwoLists = (l1, l2) => {
        let dummyHead = new ListNode(0);
		let cur = dummyHead;
		while(l1 && l2) {
			if (l1.val < l2.val) {
				cur.next = l1;
				l1 = l1.next;
			}else {
				cur.next = l2;
				
				l2 = l2.next;
			}
			cur = cur.next;
		}
		if (l1) {
			cur.next = l1;
		}else if (l2) {
			cur.next = l2;
		}
		return dummyHead.next;
    };
    if (lists.length === 0) {
        let head = new ListNode(0);
        return head.next;
    }else if (lists.length < 2) {
        return lists[0];
    }
    let middle = Math.floor(lists.length / 2),
        left = lists.slice(0, middle),
        right = lists.slice(middle);
    return mergeTwoLists(mergeKLists(left), mergeKLists(right));
};

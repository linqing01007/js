// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

// 示例 1:

// 输入: 1->1->2
// 输出: 1->2
// 示例 2:

// 输入: 1->1->2->3->3
// 输出: 1->2->3

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

// import { createListNode, convertListNodeToArr } from './util/util'
const { createListNode, convertListNodeToArr } = require('./util/util.js')

var deleteDuplicates = function(head) {
    if (!head) {return head}
    let dummyHead = head;
	let pre = dummyHead, cur = dummyHead, same = false;
	while(cur && cur.next) {
		cur = cur.next;
		
		if (pre.val === cur.val) {
			same = true;
			continue;
		}
		pre.next = cur;
		pre = pre.next;
	}
	if (pre.val === cur.val) {
		pre.next = null
	}
	return head;
};






const deleteDuplicatesII = function (head) {
  if (!head || !head.next) return head
  let dummyHead = new ListNode(0)//createListNode([0])
  dummyHead.next = head
  let p = head, q = head.next
  while (q) {
    while (q && q.val === p.val) {
      q = q.next
    }
    p.next = q
    p = p.next
  }
  return dummyHead.next
}

const i = createListNode([1, 1, 1])
console.log(convertListNodeToArr(deleteDuplicatesII(i)))

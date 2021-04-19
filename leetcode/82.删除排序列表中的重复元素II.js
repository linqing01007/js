// 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

// 示例 1:

// 输入: 1->2->3->3->4->4->5
// 输出: 1->2->5
// 示例 2:

// 输入: 1->1->1->2->3
// 输出: 2->3
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

const createListNode = require('./util/util.js').createListNode
const convertListNodeToArr = require('./util/util.js').convertListNodeToArr
// const ListNode = require('./util/util.js').ListNode
// import { createListNode, convertListNodeToArr, ListNode} from './util/util.js'
var deleteDuplicates = function(head) {
    //使用哈希表
    let map = {};
	let dummyHead = head;
	while(dummyHead) {
		let value = dummyHead.val;
		map[value] = map[value] ? map[value] + 1 : 1;
		dummyHead = dummyHead.next;
	}
	dummyHead = createListNode(0);
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



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicatesII = function(head) {
   if (!head || !head.next) return head
  const dummyHead = createListNode([0])
  dummyHead.next = head
  let p = dummyHead, q = p.next
  while (q) {
    let step = 1
    while (q.next && q.next.val === q.val) {
      q = q.next
      step++
    }
    if (step === 1) {
      p.next = q
      p = p.next
    } else {
      p.next = null
    }
    q = q.next
  }
  return dummyHead.next
};

let head = createListNode([1, 1, 2, 2, 3, 3, 4, 4, 5, 5])
const res = deleteDuplicatesII(head)
console.log(convertListNodeToArr(res))

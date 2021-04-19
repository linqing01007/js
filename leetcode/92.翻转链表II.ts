// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

// 说明:
// 1 ≤ m ≤ n ≤ 链表长度。

// 示例:

// 输入: 0-1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL

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
import { createListNode, convertListNodeToArr } from './util/util.js'

interface ListNode {
  val: any,
  next: null | ListNode
}
const reverseBetween: (head: ListNode, m: number, n: number) => ListNode = function(head: ListNode, m: number, n: number): ListNode {
  if (m === n) return head
  let p: ListNode = createListNode([0])
  p.next = head
  const q = p
  let count: number = 1
  while (count < m) {
    p = p.next
    count++
  }
  console.log(convertListNodeToArr(p))
  let cur = p.next // 因为m <= 链表长度，所以p一定不为null
  while (count < n) {
    const next = cur.next
    cur.next = next.next
    next.next = p.next
    p.next = next
    count++
  }
  return q.next
};
const i = createListNode([1, 2, 3, 4, 5])
console.log(convertListNodeToArr(reverseBetween(i, 2, 3)))


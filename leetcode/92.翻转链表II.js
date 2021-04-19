"use strict";
// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
exports.__esModule = true;
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
var util_js_1 = require("./util/util.js");
var reverseBetween = function (head, m, n) {
    if (m === n)
        return head;
    var p = util_js_1.createListNode([0]);
    p.next = head;
    var q = p;
    var count = 1;
    while (count < m) {
        p = p.next;
        count++;
    }
    console.log(util_js_1.convertListNodeToArr(p));
    var cur = p.next; // 因为m <= 链表长度，所以p一定不为null
    while (count < n) {
        var next = cur.next;
        cur.next = next.next;
        next.next = p.next;
        p.next = next;
        count++;
    }
    return q.next;
};
var i = util_js_1.createListNode([1, 2, 3, 4, 5]);
console.log(util_js_1.convertListNodeToArr(reverseBetween(i, 1, 5)));

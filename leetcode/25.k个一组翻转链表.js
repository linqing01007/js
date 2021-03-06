给出一个链表，每 k 个节点一组进行翻转，并返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么将最后剩余节点保持原有顺序。

示例 :

给定这个链表：1->2->3->4->5

当 k = 2 时，应当返回: 2->1->4->3->5

当 k = 3 时，应当返回: 3->2->1->4->5

说明 :

你的算法只能使用常数的额外空间。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

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
var reverseKGroup = function(head, k) {
    if (k < 2) { return head }
    let reverseList = (h, l) => {
        //将列表的前l个进行翻转
        let dummyHead = new ListNode(0);
        dummyHead.next = h;
        let end = h;
        for (let i = l; i > 0; i--) {
            let cur = dummyHead, j = 0;
            while (cur.next && cur.next.next && j < i - 1) {
                let temp = cur.next;
                cur.next = cur.next.next;
                temp.next = temp.next.next;
                cur.next.next = temp;
                cur = cur.next;
                j++;
            }
        }
        return [dummyHead.next, end];
    }
    let dummyHead = new ListNode(0), count = 0;
    dummyHead.next = head;
    let p = dummyHead.next, q = dummyHead;
    let cur = q;
    while(q && q.next) {
        q = q.next;
        count++;
        if (count % k === 0) {
            let pre = q;
            if(q.next) {
                q = q.next;
                count++;
            }
            let [temp, end] = reverseList(p, k);
            cur.next = temp;
            p = q;
            cur = end;
        }
    }
    return dummyHead.next;
};

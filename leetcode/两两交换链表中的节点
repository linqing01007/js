给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.
说明:

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
 * @return {ListNode}
 */
 //递归
var swapPairs = function(head) {
    if(!head) return null
    if(!head.next) return head
    let temp = head.next
    head.next = swapPairs(temp.next)
    temp.next = head
    return temp
};

//非递归
var swapPairs = function(head) {
    if (!head) { return head; }
    let head0 = new ListNode('');
    head0.next = head;
    let curr = head0;
    while (curr.next && curr.next.next) {
        let temp = curr.next;
        curr.next = curr.next.next;
        temp.next = temp.next.next;
        curr.next.next = temp;
        curr = temp;
    }
    return head0.next;
}

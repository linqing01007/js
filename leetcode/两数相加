给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/* 自己的解答
var addTwoNumbers = function(l1, l2) {
    let n1 = l1, n2 = l2, flag = false;
    
    while (n2) {
        n1.val += n2.val;
        
        if (n1.val > 9) {
            flag = true;
            n1.val -= 10;
        }
        let _n1 = n1;
        while (flag) {
            flag = false;
            if (!_n1.next) {
                _n1.next = new ListNode(1)
            }else {
                _n1 = _n1.next;
                _n1.val += 1;
            }
            if (_n1.val > 9){
                _n1.val -= 10;
                flag = true
            } 
        }
        flag = false;
        n2 = n2.next;
        if (n2 && !n1.next) {
            n1.next = new ListNode(0);
        }
        n1 = n1.next
    }
    return l1;
};
*/官方解答
var addTwoNumbers = function(l1, l2) {
    let resNode = new ListNode(0);
    let p = l1, q = l2, curr = resNode;
    let carry = 0;
    while (p || q) {
        let x = p ? p.val : 0;
        let y = q ? q.val : 0;
        let sum = carry + x + y;
        carry = sum >= 10 ? 1 : 0;
        
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p) p = p.next;
        if (q) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return resNode.next;
}

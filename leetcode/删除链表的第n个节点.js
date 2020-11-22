给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。

//一次遍历， 使用两个节点，第一个先走n步，然后两个节点一起走，当第一个到达尽头时第二所在位置就是倒数第n + 1个节点了
var removeNthFromEnd = function(head, n) {
    let dummpyNode = new ListNode(0);
		dummpyNode.next = head;
		let p = dummpyNode, q = dummpyNode;
		for (let i = 0; i < n; i++) {
			p = p.next;
		}
    if (!p.next) { return head.next }
		while (p.next) {
			p = p.next;
			q = q.next;
		}
		q.next = q.next.next;
		return head;
    
    /*
    一开始的解答
    let h = head, l = 0;
		while (h) {
			l++;
			h = h.next;
		}
		h = head;
		let m = 0;
        if (l === n) {
            return head.next
        }
		while (h) {
            m++;
			if (m === l - n) {
				let temp = h.next;
				h.next = temp.next;
				break;
			}
			h = h.next
			
		}
		return head
    */
};

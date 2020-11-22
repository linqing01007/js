删除链表中等于给定值 val 的所有节点。

示例:

输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5

var removeElements = function(head, val){
	let dummyHead = new ListNode(null), pre = dummyHead;
	let q = head
	dummyHead.next = head;
	let p = dummyHead;
	while(p.next) {
		if (p.next.val === val) {
			p.next = p.next.next;
		}else {
			p = p.next;
		}
	}

	let recursive = (head, val) => {
		//递归
		if (!head) { return null; }
		if (head.val === val) { return recursive(head.next, val); }
		head.next = recursive(head.next, val);
		return head;
	}
	return recursive(q, val)
	//print(convertListNodeToArr(head))
	return dummyHead.next;
}

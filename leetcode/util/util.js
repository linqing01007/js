
const ListNode = function(val) {
	this.val = val;
	this.next = null;
}
Object.prototype.getValue = function(val, de) {
	if (val in this) {
		return this[val];
	}else {
		this[val] = de;
		return this[val];
	}
}

const MAX_VALUE = Math.pow(2, 31) - 1, MIN_VALUE = -Math.pow(2, 31);

const createListNode = function (arr) {
	let head = new ListNode(0);
	let p = head;
	for (let i = 0; i < arr.length; i++) {
		p.next = new ListNode(arr[i]);
		p = p.next;
		
	}
	return head.next;
}
const convertListNodeToArr = function (listNode) {
	let arr = [];
	while(listNode) {
		let val = listNode.val;
		arr.push(val);
		listNode = listNode.next;
	}
	return arr;
}
const TreeNode = function(val) {
	this.val = val;
	this.left = this.right = null;
}

const quickSort = function (nums) {
  if (nums.length <= 1) return nums
  let mid = nums[0]
  let left = [], right = []
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= mid) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }
  return quickSort(left).concat([mid]).concat(quickSort(right))
}

module.exports = {
  convertListNodeToArr,
  createListNode,
  MAX_VALUE,
  MIN_VALUE,
  quickSort
}
给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

示例 1:

输入: [1,2,0]
输出: 3
示例 2:

输入: [3,4,-1,1]
输出: 2
示例 3:

输入: [7,8,9,11,12]
输出: 1
说明:

你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。


/**
 * @param {number[]} nums
 * @return {number}
 */
 /*
在遍历数组的过程中把数字 i 放在A[i-1]的位置。最后如果A[k] != k+1就说明k+1这个数字没有出现过。
由于数组的大小是n，因此如果原始数组中的数字是1，2…n，则最后应该返回n+1。

还需要注意的是if中判断条件：A[i] != A[A[i]-1]；即如果某个位置A[i]已经放置了i+1或者数字A[i]即将要放入的位置(A[A[i]-1])原本就是A[i]，则跳过。
这样可以避免出现死循环（如数组[1,2]和[1,1]） 
原文：https://blog.csdn.net/a45872055555/article/details/38472477 
var firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i++) {
			while (nums[i] > 0 && nums[i] < nums.length && nums[i] !== nums[nums[i] - 1]) {
				let index = nums[i];
				let temp = index;
				nums[i] = nums[index - 1];
				nums[index - 1] = index;
			}
		}
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] !== i + 1) {
				return i + 1;
			}
		}
		return nums.length + 1;
};

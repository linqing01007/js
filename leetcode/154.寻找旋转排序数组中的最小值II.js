// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 请找出其中最小的元素。

// 注意数组中可能存在重复的元素。

// 示例 1：

// 输入: [1,3,5]
// 输出: 1
// 示例 2：

// 输入: [2,2,2,0,1]
// 输出: 0

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0, r = nums.length - 1;
	while (l < r) {
		let mid = parseInt((l + r) / 2);

		if (nums[mid] > nums[r]) {
			l = mid + 1;
		}else if (nums[mid] < nums[r]){
			r = mid;
		}else {//防止最小值是重复元素
			r--;
		}
	}
	return nums[l];
};

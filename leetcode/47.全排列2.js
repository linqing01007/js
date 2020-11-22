给定一个可包含重复数字的序列，返回所有不重复的全排列。

示例:

输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 //去重的全排列就是从第一个数字起每个数分别与它后面非重复出现的数字交换
var permuteUnique = function(nums) {
    let ans = [];
	let swap = (arr, i, j) => {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	let needSwap = (arr, i, j) => {
		for (let k = i; k < j; k++) {
			if (arr[k] === arr[j]) {
				return false
			}
		}
		return true
	}
	let perm = (arr, start, length) => {
		if (start === length) {
			let temp = arr.slice();
			ans.push(temp);
			return
		}
		for (let i = start; i <= length; i++) {
			if (needSwap(arr, start, i)) {
				swap(arr, i, start);
				perm(arr, start + 1, length);
				swap(arr, i, start);
			}
		}
	}
	perm(nums, 0, nums.length - 1)
	return ans
};

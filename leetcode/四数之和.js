给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

//比三数之和多了一层循环
fourSum(nums, target) {
		nums.sort((a, b) => a - b);
		let ans = [];
		let i = 0;
		while (i < nums.length - 3) {
			let j = i + 1;
			while (j < nums.length - 2) {
				let k = j + 1, end = nums.length - 1;
				while (k < end && k < nums.length - 1) {
					let sum = nums[i] + nums[j] + nums[k] + nums[end];
					if (sum === target) {
						ans.push([nums[i], nums[j], nums[k], nums[end]]);
						k++;
						end--;
						while (nums[k] === nums[k - 1]) { k++ }
						while (nums[end] === nums[end + 1]) { end-- }

					}else if (sum > target){
						end--;
					}else {
						k++;
					}
				}
				j++;
				while (nums[j] === nums[j - 1]) { j++ }
			}
			i++;
			while(nums[i] === nums[i - 1]) { i++; }
		}
		return ans
	}

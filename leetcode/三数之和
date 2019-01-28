给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]


/*
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let twoSum = [], ans = [];
    let cmp = (a, b) => a - b;
    nums.sort(cmp);
    let i = 0;
    while (i < nums.length - 1) {
        let start = i + 1;
        let end = nums.length - 1;
        while (start < nums.length && start < end){
            let sum = nums[i] + nums[start] + nums[end]
            if (sum === 0) {
                ans.push([nums[i], nums[start], nums[end]]);

                start++;
                end--;
                //跳过重复
                while (nums[start - 1] === nums[start]) {
                    start ++;
                }
                while (nums[end + 1] === end[end]) {
                    end--;
                }
            }else if (sum > 0) {
                end--;
            }else {
                start++;
            }

        }
        i++;
        //跳过重复
        while (nums[i] === nums[i - 1]) { i++ }

    }
    return ans
};

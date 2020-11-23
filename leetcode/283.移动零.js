// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:

// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/move-zeroes
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  // 删除0，再在后面增加0
  // let count = 0, i = nums.length
  // while (i--) {
  //   if (nums[i] === 0) {
  //     count += 1
  //     nums.splice(i, 1)
  //   }
  // }
  // for (i = 0; i < count; i++) {
  //   nums.push(0)
  // }

  // 双指针法
  // 左指针末尾是已处理的末尾，右指针指向待处理的非零部分的起始
  // 即左指针左边是非零，右指针左边到左指针处都是0
  let left = right = 0
  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left += 1
    }
    right += 1
  }
}

let nums = [0, 1, 2, 0, 12]
moveZeroes(nums)
console.log(nums)
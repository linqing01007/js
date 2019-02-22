给定一个没有重复数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 //规律：全排列就是从第一个数字起每个数分别与它后面的数字交换；
var permute = function(nums) {
    let ans = [];
    let swap = (arr, i, j) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    let perm = (arr, i, j) => {
        if (i === j) {
            let temp = arr.slice();
            ans.push(temp);
            return
        }
        for (let k = i; k <= j; k++) {
            swap(arr, k, i);
            perm(arr, i + 1, j);
            swap(arr, k, i);
        }
    }
    perm(nums, 0, nums.length - 1);
    return ans
};

给定一个未排序的整数数组，找出最长连续序列的长度。

要求算法的时间复杂度为 O(n)。

示例:

输入: [100, 4, 200, 1, 3, 2]
输出: 4
解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
	//参考评论大佬
	/*
用哈希表存储每个端点值对应连续区间的长度
若数已在哈希表中：跳过不做处理
若是新数加入：
取出其左右相邻数已有的连续区间长度 left 和 right
计算当前数的区间长度为：cur_length = left + right + 1
根据 cur_length 更新最大长度 max_length 的值
更新区间两端点的长度值
	*/
    let hash = {}, max = 0;
	for (let num of nums) {
		if (!hash[num]) {
			let left = hash[num - 1] ? hash[num - 1] : 0;
			let right = hash[num + 1] ? hash[num + 1] : 0;
			let cur_length = left + right + 1;
			max = Math.max(max, cur_length);
			hash[num] = cur_length;
            hash[num - left] = cur_length;
			hash[num + right] = cur_length;
		}
	}
	return max;
};

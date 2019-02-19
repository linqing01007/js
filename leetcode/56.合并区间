给出一个区间的集合，请合并所有重叠的区间。

示例 1:

输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:

输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length < 1) return intervals;
    intervals.sort((a, b) => a.start - b.start);
	let ans = [];
	let last = intervals.reduce((pre, cur) => {
		if (pre.end >= cur.start) {
			return new Interval(pre.start, Math.max(pre.end, cur.end));
		}else{
			ans.push(pre)
			return cur;
		}
	})
	if (last) {
		ans.push(last)
	}
	return ans
};

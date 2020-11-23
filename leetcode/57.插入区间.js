给出一个无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

示例 1:

输入: intervals = [[1,3],[6,9]], newInterval = [2,5]
输出: [[1,5],[6,9]]
示例 2:

输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出: [[1,2],[3,10],[12,16]]
解释: 这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。

/*
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    if (newInterval.length < 1) { return intervals }
    let mergeInterval = function(intervals) {
        //intervals.sort((a, b) => a.start - b.start);
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
    }
    let i = 0;
	while (i < intervals.length && intervals[i].start < newInterval.start) {
		i++;
	}
	let temp = [];
	if (i === 0) {
		temp = [newInterval].concat(intervals);
	}else {
		temp = intervals.slice(i - 1, i).concat(newInterval, intervals.slice(i))
	}
	temp = mergeInterval(temp);
	let ans = i === 0 ? temp : intervals.slice(0, i - 1).concat(temp)
	return ans
};

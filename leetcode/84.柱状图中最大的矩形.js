// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。
// 示例:

// 输入: [2,1,5,6,2,3]
// 输出: 10

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    //维持一个单调栈，
	//1.栈为空，直接入栈
	//2.当前高度大于栈顶元素对应高度，入栈；
	//3.当前高度小于栈顶元素对应高度则出栈，并计算出栈高度所形成的最大面积：height * (i - (stack) - 1)
	//4.重复上述步骤求出最大面积
	let stack = [] // 单调栈，存放索引值
  let maxArea = 0
	heights.push(0)
	for(let i = 0; i < heights.length; i++) {
		while(stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
			let top = stack.pop()
			maxArea = Math.max(maxArea, heights[top] * (stack.length < 1 ? i : (i - stack[stack.length - 1] - 1)))
		}
		stack.push(i)
	}
	return maxArea
};
const i = [1, 2, 3, 4, 5]
console.log(largestRectangleArea(i))



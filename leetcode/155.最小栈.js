设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。
示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.



/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (!this.min.length || this.min[this.min.length - 1] >= x) {
        this.min.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length && this.min.length) {
        let minStackTop = this.stack[this.stack.length - 1];
        let minTop = this.min[this.min.length - 1];
        if (minStackTop === minTop) {
            this.min.pop()
        }
    }
    if (this.stack.length) {
        this.stack.pop()
    }
    //return pop;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let l = this.stack.length - 1;
    return this.stack[l];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.min.length) {
        return this.min[this.min.length - 1]
    }
    return 0
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

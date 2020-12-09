//数组扁平化
Array.prototype.flatten = function() {
	return Array.prototype.reduce.call(this, (pre, cur) => {
		return pre.concat(Array.isArray(cur) ? Array.prototype.flatten.call(cur) : cur);
	}, [])
}

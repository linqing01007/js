// 它的基本思想是：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，
// 然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。

const quickSort = function(nums) {
	const sort = (arr, left, right) => {
		if (left >= right) {
			return
		}
		const baseValue = arr[right];
		let i = left, j = right;
		while (i < j) {
			while (i < j && arr[i] <= baseValue) {
				i++;
			}
			arr[j] = arr[i];
			while (j > i && arr[j] >= baseValue) {
				j--;
			}
			arr[i] = arr[j]
		}
		arr[j] = baseValue;
		sort(arr, left, j - 1);
		sort(arr, j + 1, right);
	}
	const newArr = nums.concat();
	sort(newArr, 0, nums.length - 1);
	return newArr
}

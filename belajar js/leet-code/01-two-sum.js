#! This one is "easy", very !literaly
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	// memakai map
	const tempMap = new Map();

	for (let i = 0; i < nums.length; i++) {
		if (tempMap.has(target - nums[i])) {
			return [i, tempMap.get(nums[i])];
		}
		tempMap.set(nums[i], i);

		// for (let j = i + 1; j < nums.length; j++) {
		// 	if (nums[i] + nums[j] === target) {
		// 		return [nums.indexOf(nums[i]), nums.indexOf(nums[j], nums.indexOf(nums[i]) + 1)];
		// 	}
		// }
	}
};

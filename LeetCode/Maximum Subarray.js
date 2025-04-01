/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let max = nums.reduce((acc, curr) => acc + curr, 0);

  while (left <= right) {
    let temp = max;
    if (nums[left] > nums[right]) {
      right--;
      max = Math.max(temp - nums[right], max);
    } else {
      left++;
      max = Math.max(temp - nums[left], max);
    }
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let low = 0,
    high = nums.length - 1,
    now = 0;

  while (now <= high) {
    if (nums[now] === 0) {
      [nums[now], nums[low]] = [nums[low], nums[now]];
      low++;
      now++;
    } else if (nums[now] === 1) {
      now++;
    } else if (nums[now] === 2) {
      [nums[now], nums[high]] = [nums[high], nums[now]];
      high--;
    }
  }
};

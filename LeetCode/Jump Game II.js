/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const n = nums.length;
  let min = Infinity;

  function dfs(index, count) {
    if (index > n - 1) {
      return;
    }
    if (index === n - 1) {
      min = Math.min(min, count);
      return;
    }

    for (let i = 1; i <= nums[index]; i++) {
      dfs(index + i, count + 1);
    }
  }

  dfs(0, 0);
  return min;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = [];
  const used = Array(nums.length).fill(false);

  function getPermutation(arr) {
    if (arr.length === nums.length) {
      ans.push([...arr]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      arr.push(nums[i]);
      getPermutation(arr);
      arr.pop();
      used[i] = false;
    }
  }

  getPermutation([]);

  return ans;
};

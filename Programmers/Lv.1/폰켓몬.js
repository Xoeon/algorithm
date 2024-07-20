const solution = (nums) => {
  const len = nums.length / 2;
  const set = new Set(nums);

  return set.size < len ? set.size : len;
};

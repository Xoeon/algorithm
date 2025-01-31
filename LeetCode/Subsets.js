function subsets(nums) {
  const ans = [];

  function backtrack(start, currentSubset) {
    ans.push([...currentSubset]);

    for (let i = start; i < nums.length; i++) {
      currentSubset.push(nums[i]);
      backtrack(i + 1, currentSubset);
      currentSubset.pop();
    }
  }

  backtrack(0, []);
  return ans;
}

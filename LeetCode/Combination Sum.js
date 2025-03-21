/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = [];

  function backtrack(start, arr, sum) {
    if (sum === target) {
      ans.push([...arr]);
      return;
    }

    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      arr.push(candidates[i]);
      backtrack(i, arr, sum + candidates[i]);
      arr.pop();
    }
  }

  backtrack(0, [], 0);
  return ans;
};

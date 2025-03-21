/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = [];
  candidates.sort((a, b) => a - b);

  function dfs(arr) {
    for (let num of candidates) {
      if (arr[arr.length - 1] > num) continue;

      arr.push(num);
      const sum = arr.reduce((acc, curr) => acc + curr, 0);

      if (sum === target) {
        ans.push([...arr]);
        arr.pop();
        return;
      } else if (sum < target) {
        dfs(arr);
      } else {
        arr.pop();
        return;
      }
      arr.pop();
    }
  }

  dfs([]);
  return ans;
};

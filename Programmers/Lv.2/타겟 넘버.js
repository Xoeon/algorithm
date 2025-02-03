function solution(numbers, target) {
  const n = numbers.length;
  let ans = 0;

  function dfs(x, value) {
    if (x < n) {
      dfs(x + 1, value + numbers[x]);
      dfs(x + 1, value - numbers[x]);
    } else {
      if (value === target) ans++;
    }
  }

  dfs(0, 0);

  return ans;
}

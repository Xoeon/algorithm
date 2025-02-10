function solution(arr1, arr2) {
  const N = arr1.length;
  const K = arr1[0].length;
  const M = arr2[0].length;

  const ans = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let sum = 0;
      for (let k = 0; k < K; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      ans[i][j] = sum;
    }
  }

  return ans;
}

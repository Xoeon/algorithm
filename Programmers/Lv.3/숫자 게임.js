function solution(A, B) {
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  let count = 0;
  let pointer = 0;
  let N = A.length;

  for (let i = 0; i < N; i++) {
    if (B[pointer] > A[i]) {
      count++;
      pointer++;
    } else {
      continue;
    }
  }

  return count;
}

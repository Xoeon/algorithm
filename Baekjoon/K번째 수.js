const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const [N, k] = input.map(Number);

function countLessOrEqual(mid) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    count += Math.min(Math.floor(mid / i), N);
  }
  return count;
}

function findKthElement() {
  let left = 1,
    right = N * N,
    answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (countLessOrEqual(mid, N) >= k) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

console.log(findKthElement(N, k));

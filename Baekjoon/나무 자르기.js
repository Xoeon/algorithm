const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const [N, M] = input[0].split(' ');
const arr = input[1].split(' ').map((str) => +str);

let answer = 0;

const binary_search = (arr, start, end, target) => {
  if (start > end) return;

  const mid = Math.floor((start + end) / 2);
  let sum = 0;

  for (let i = 0; i < N; i++) {
    if (arr[i] > mid) {
      sum += arr[i] - mid;
    }
  }

  if (sum === target) {
    console.log('sum === target', sum, target, mid);
    answer = mid;
    return;
  } else if (sum < target) {
    console.log('sum < target', sum, target, mid);
    return binary_search(arr, start, mid - 1, target);
  } else {
    // answer = mid;
    console.log('sum > target', sum, target, mid);
    return binary_search(arr, mid + 1, end, target);
  }
};

binary_search(arr, 0, Math.max(...arr), +M);
console.log(answer);

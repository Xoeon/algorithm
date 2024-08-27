const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const M = input[0].split(' ')[1];
const arr = input[1].split(' ').map((str) => +str);

let start = 0;
let end = Math.max(...arr);

let result = 0;

while (start <= end) {
  let sum = 0;
  let mid = Math.floor((start + end) / 2);

  for (let x of arr) {
    if (x > mid) {
      sum += x - mid;
    }
  }

  if (sum < M) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);

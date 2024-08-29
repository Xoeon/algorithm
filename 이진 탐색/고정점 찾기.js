const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const N = input[0];
const arr = input[1].split(' ').map((str) => +str);

let start = 0;
let end = N - 1;

while (start <= end) {
  let idx = Math.floor((start + end) / 2);

  if (arr[idx] === idx) {
    console.log(idx);
    break;
  } else if (arr[idx] < idx) {
    start = idx + 1;
  } else if (arr[idx] > idx) {
    end = idx - 1;
  } else {
    console.log(-1);
    break;
  }
}

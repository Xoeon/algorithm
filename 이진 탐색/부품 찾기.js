const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const N = input[0];
const parts = input[1]
  .split(' ')
  .map((str) => +str)
  .sort((a, b) => a - b);
const targets = input[3].split(' ').map((str) => +str);

const answer = [];

const binary_search = (start, end, target) => {
  if (start > end) {
    answer.push('no');
    return;
  }

  let mid = Math.floor((start + end) / 2);

  if (parts[mid] === target) {
    answer.push('yes');
  } else if (parts[mid] < target) {
    binary_search(mid + 1, end, target);
  } else {
    binary_search(start, mid - 1, target);
  }
};

const solution = () => {
  for (let target of targets) {
    binary_search(0, N - 1, target);
  }

  console.log(answer.join(' '));
};

solution();

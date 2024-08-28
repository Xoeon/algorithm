const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const [N, targetStr] = input[0].split(' ');
const target = +targetStr;
const arr = input[1].split(' ').map((str) => +str);

let result_left = -1;
let result_right = -1;

const binary_search_left = (arr, target) => {
  let start = 0;
  let end = N - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      result_left = mid;
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result_left;
};

const binary_search_right = (arr, target) => {
  let start = 0;
  let end = N - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      result_right = mid;
      start = mid + 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result_right;
};

const solution = () => {
  const first = binary_search_left(arr, target);
  const last = binary_search_right(arr, target);

  if (first === -1 || last === -1) return -1;

  return last - first + 1;
};

console.log(solution());

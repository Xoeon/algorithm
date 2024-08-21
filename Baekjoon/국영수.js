let [n, ...arr] = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .split('\n');

let answer = '';

arr = arr
  .map((line) => line.split(' ').map((info) => Number(info) || info))
  .sort((a, b) => {
    return b[1] - a[1] || a[2] - b[2] || b[3] - a[3] || (a[0] > b[0] ? 1 : -1);
  });

arr.forEach((el) => {
  answer += el[0] + '\n';
});

console.log(answer.trim());

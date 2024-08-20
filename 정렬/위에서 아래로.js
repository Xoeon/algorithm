const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

const N = +input[0];
const arr = input.slice(1).map((num) => Number(num));

const selection_sort = () => {
  for (let i = 0; i < arr.length; i++) {
    let max_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[max_index] < arr[j]) {
        max_index = j;
      }
    }
    [arr[i], arr[max_index]] = [arr[max_index], arr[i]];
  }
};

selection_sort();
console.log(arr.join(' '));

/*
[input]
3
15
27
12
*/

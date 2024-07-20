const arr = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

const solution = (answer) => {
  let score = [];
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = 0; j < answer.length; j++) {
      if (answer[j] === arr[i][j % arr[i].length]) {
        temp++;
      }
    }
    score.push(temp);
  }

  score.forEach((num, i) => {
    if (num === Math.max(...score)) {
      ans.push(i + 1);
    }
  });

  return ans;
};

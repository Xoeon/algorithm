const solution = (arr) => {
  let answer = [];
  const l = arr.length;

  for (let i = 1; i <= l; i++) {
    if (arr[i - 1] !== arr[i]) {
      answer.push(arr[i - 1]);
    }
  }

  return answer;
};

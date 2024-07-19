const solution = (k, score) => {
  let arr = [],
    answer = [];
  const len = score.length;

  for (let i = 0; i < len; i++) {
    arr.push(score[i]);
    answer.push(
      arr
        .sort((a, b) => b - a)
        .slice(0, k)
        .pop()
    );
  }

  return answer;
};

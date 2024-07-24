const solution = (k, m, score) => {
  score.sort((a, b) => b - a);

  let answer = 0;
  const len = score.length;

  for (let i = 0; i < len; i += m) {
    let temp = score.slice(i, m + i);

    if (temp.length === m) {
      answer += temp.pop();
    }
  }

  return answer * m;
};

const solution = (num, limit, power) => {
  let answer = 0;

  for (let i = 1; i <= num; i++) {
    let temp = 0;

    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        temp++;
        if (j !== i / j) {
          temp++;
        }
      }
    }

    temp > limit ? (answer += power) : (answer += temp);
  }

  return answer;
};

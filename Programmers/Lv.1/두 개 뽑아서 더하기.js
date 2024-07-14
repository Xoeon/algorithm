const solution = (numbers) => {
  const l = numbers.length;
  let answer = [];

  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      const sum = numbers[i] + numbers[j];

      if (!answer.includes(sum)) {
        answer.push(sum);
      }
    }
  }

  return answer.sort((a, b) => a - b);
};

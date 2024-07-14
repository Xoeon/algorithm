const solution = (numbers) => {
  const l = numbers.length;
  let answer = [];

  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(answer)].sort((a, b) => a - b);
};

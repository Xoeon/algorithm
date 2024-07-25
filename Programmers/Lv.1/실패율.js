const solution = (N, stages) => {
  let rates = {};

  for (let i = 1; i <= N; i++) {
    let stage = stages.filter((stage) => stage >= i).length;
    let n = stages.filter((stage) => stage === i).length;

    rates[i] = n / stage;
  }

  let sorted = Object.entries(rates).sort((a, b) => b[1] - a[1]);

  return sorted.map((arr) => +arr[0]);
};

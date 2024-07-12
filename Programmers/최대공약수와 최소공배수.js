const solution = (d, budget) => {
  let count = 0;
  d.sort((a, b) => a - b).reduce((acc, curr) => {
    while (acc <= budget) {
      acc += acc + curr;
    }
  }, 0);
};

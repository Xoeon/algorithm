const solution = (A, B) => {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((total, val, index) => total + val * B[index], 0);
};

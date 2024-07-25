const isPrimeNum = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const solution = (n) => {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrimeNum(i)) count++;
  }
  return count;
};

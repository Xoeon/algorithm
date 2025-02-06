const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const calculateProbability = (M) => {
  const totalSpace = 60 ** 3;
  const validSpace = M * M * (M + 3 * (60 - M));

  const divisor = gcd(validSpace, totalSpace);
  const numerator = validSpace / divisor;
  const denominator = totalSpace / divisor;

  return `${numerator}/${denominator}`;
};

const M = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(calculateProbability(M));

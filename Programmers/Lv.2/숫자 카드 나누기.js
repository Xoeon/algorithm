function solution(arrayA, arrayB) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const getArrayGCD = (arr) => arr.reduce((acc, curr) => gcd(acc, curr));

  const isValidGCD = (gcd, arr) => arr.every((num) => num % gcd !== 0);

  const gcdA = getArrayGCD(arrayA);
  const gcdB = getArrayGCD(arrayB);

  const candidates = [];
  if (isValidGCD(gcdA, arrayB)) candidates.push(gcdA);
  if (isValidGCD(gcdB, arrayA)) candidates.push(gcdB);

  return candidates.length ? Math.max(...candidates) : 0;
}

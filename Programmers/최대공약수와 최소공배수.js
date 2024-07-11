const gcf = (a, b) => {
  if (b === 0) return a;
  return gcf(b, a % b);
};

const lcm = (a, b) => {
  const g = gcf(a, b);
  return g * (a / g) * (b / g);
};

const solution = (n, m) => {
  return [gcf(n, m), lcm(n, m)];
};

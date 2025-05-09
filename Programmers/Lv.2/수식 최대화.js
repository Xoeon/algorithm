const getPermutations = (arr) => {
  if (arr.length === 1) return [arr];

  const result = [];
  arr.forEach((v, i) => {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perms = getPermutations(rest);
    perms.forEach((p) => result.push([v, ...p]));
  });

  return result;
};

const calc = (tokens, opOrder) => {
  let arr = [...tokens];

  for (const op of opOrder) {
    const stack = [];

    while (arr.length) {
      const token = arr.shift();

      if (token === op) {
        const a = Number(stack.pop());
        const b = Number(arr.shift());
        const result = op === "+" ? a + b : op === "-" ? a - b : a * b;
        stack.push(result.toString());
      } else {
        stack.push(token);
      }
    }
    arr = stack;
  }

  return Math.abs(Number(arr[0]));
};

function solution(expression) {
  const tokens = expression.match(/\d+|[\+\-\*]/g);
  const operators = [...new Set(tokens.filter((t) => isNaN(t) === true))];
  const permutations = getPermutations(operators);

  let max = 0;
  for (const order of permutations) {
    max = Math.max(max, calc(tokens, order));
  }

  return max;
}

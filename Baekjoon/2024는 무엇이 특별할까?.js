const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input.slice(1).map((line) => {
  const [n, k] = line.split(" ");
  return [BigInt(n), BigInt(k)];
});

const out = [];
for (const [N, K] of arr) {
  if (K === 0n) {
    out.push(((N + 1n) / 2n).toString());
  } else if (K >= 60n) {
    out.push("0");
  } else {
    const M = N / (1n << K);
    out.push(((M + 1n) / 2n).toString());
  }
}

console.log(out.join("\n"));

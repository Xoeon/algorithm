const input = require("fs").readFileSync("./input.txt").toString().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const display = input[1];

const check = Array(N).fill(false);
const map = { 2: "2", 3: "E", E: "3" };

for (let i = 0; i <= K; i++) {
  for (let j = 0; j < N / 2; j++) {
    if (display[N - j - 1] === map[display[j]]) {
      check[j] = true;
      check[N - j - 1] = true;
    }
  }
  console.log(check.filter((c) => c).length);
}

const input = require("fs").readFileSync("./input.txt").toString().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const costs = input.slice(1).map((e) => e.split(" ").map(Number));

const arr = [];
for (const [now, target] of costs) {
  if (now < target) {
    arr.push(target - now);
  }
}

arr.sort((a, b) => a - b);
const len = arr.length;
const have = N - len;
const need = K - have;

if (need <= 0) {
  console.log(0);
} else {
  console.log(arr[need - 1]);
}

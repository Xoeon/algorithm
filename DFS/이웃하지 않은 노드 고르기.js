const [N, M] = [6, 4];
const arr = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];

const hash = {};
arr.forEach((e) => {
  const [node, linked] = e;

  if (!hash[node]) hash[node] = new Set();
  if (!hash[linked]) hash[linked] = new Set();
  hash[node].add(linked);
  hash[linked].add(linked);
});

let max = 0;
function dfs(i, selected) {
  if (i > N) {
    max = Math.max(max, selected.length);
    return;
  }

  selected.some((n) => hash[n].hash(i))
    ? dfs(i + 1, selected)
    : dfs(i + 1, [...selected, i]);
}

dfs(2, []);
dfs(2, [1]);

console.log(max);

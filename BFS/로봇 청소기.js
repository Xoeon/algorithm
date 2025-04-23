const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const N = +input.shift();
const walls = input.map((line) => line.split(" ").map(Number));

const wallSet = new Set();
for (let wall of walls) {
  const [x1, y1, x2, y2] = wall;
  wallSet.add(`${x1},${y1},${x2},${y2}`);
  wallSet.add(`${x2},${y2},${x1},${y1}`);
}

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const visited = Array.from({ length: N }, () => Array(N).fill(false));
const queue = [[0, 0, 0]];
visited[0][0] = true;

let maxDist = 0;

while (queue.length) {
  const [x, y, dist] = queue.shift();
  maxDist = Math.max(maxDist, dist);

  for (const [dx, dy] of dirs) {
    const nx = x + dx;
    const ny = y + dy;
    const wallKey = `${x},${y},${nx},${ny}`;

    if (
      nx < 0 ||
      nx >= N ||
      ny < 0 ||
      ny >= N ||
      visited[nx][ny] ||
      wallSet.has(wallKey)
    )
      continue;

    visited[nx][ny] = true;
    queue.push([nx, ny, dist + 1]);
  }
}

let allVisited = true;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      allVisited = false;
    }
  }
}

console.log(allVisited ? maxDist + 1 : -1);

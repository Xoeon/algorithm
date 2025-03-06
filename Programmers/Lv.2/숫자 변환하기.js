/* Dynamic Programming */
function dp(x, y, n) {
  const INF = Infinity;
  const hash = new Array(y + 1).fill(INF); // hash[i]: x -> i까지 가는 최소 연산 횟수
  hash[x] = 0; // x -> x는 0번

  for (let i = x; i <= y; i++) {
    if (hash[i] === INF) continue;

    if (i + n <= y) hash[i + n] = Math.min(hash[i + n], hash[i] + 1);
    if (i * 2 <= y) hash[i * 2] = Math.min(hash[i * 2], hash[i] + 1);
    if (i * 3 <= y) hash[i * 3] = Math.min(hash[i * 3], hash[i] + 1);
  }

  return hash[y] === INF ? -1 : hash[y];
}

/* Breadth-First Search */
class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.items[this.tail++] = item;
  }

  dequeue() {
    return this.head < this.tail ? this.items[this.head++] : null;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

function bfs(x, y, n) {
  if (x === y) return 0;

  const queue = new Queue();
  queue.enqueue([x, 0]);
  const visited = new Set();
  visited.add(x);

  while (!queue.isEmpty()) {
    const [cur, count] = queue.dequeue();

    for (let next of [cur + n, cur * 2, cur * 3]) {
      if (next === y) return count + 1;
      if (next < y && !visited.has(next)) {
        visited.add(next);
        queue.enqueue([next, count + 1]);
      }
    }
  }

  return -1;
}

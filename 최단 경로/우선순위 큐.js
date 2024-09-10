/* Heap 자료구조 구현 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);
    while (
      this.heap[parentIdx] &&
      this.heap[index][1] < this.heap[parentIdx][1]
    ) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  poll() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleDown() {
    let index = 0;
    let leftIdx = index * 2 + 1;
    let rightIdx = index * 2 + 2;

    while (
      (this.heap[leftIdx] && this.heap[leftIdx][1] < this.heap[index][1]) ||
      (this.heap[rightIdx] && this.heap[rightIdx][1] < this.heap[index][1])
    ) {
      let smallerIdx = leftIdx;
      if (
        this.heap[rightIdx] &&
        this.heap[rightIdx][1] &&
        this.heap[smallerIdx][1]
      ) {
        smallerIdx = rightIdx;
      }

      this.swap(index, smallerIdx);
      index = smallerIdx;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }
  }
}

/* 다익스트라 최단 경로 알고리즘 */
const INF = 1e9; // 무한을 의미하는 값으로 10억 설정

const input = require('fs').readFileSync('./input.txt').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);

const visited = Array(n + 1).fill(false);
const distance = Array(n + 1).fill(INF);

const start = 1;

for (let i = 0; i < m; i++) {
  const [a, b, c] = arr[i];
  graph[a].push([b, c]);
}

function dijkstra(start) {
  const pq = new MinHeap();
  pq.add([start, 0]);
  distance[start] = 0;

  while (pq.size() > 0) {
    const [current, dist] = pq.poll();

    if (visited[current]) continue;
    visited[current] = true;

    graph[current].forEach(([neighbor, weight]) => {
      const cost = dist + weight;

      if (cost < distance[neighbor]) {
        distance[neighbor] = cost;
        pq.add([neighbor, cost]);
      }
    });
  }
}

dijkstra(start);

for (let i = 1; i <= n; i++) {
  if (distance[i] === INF) {
    console.log('INFINITY');
  } else {
    console.log(distance[i]);
  }
}

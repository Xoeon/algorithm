class MinHeap {
  constructor(comparatorFunction) {
    this.heap = [];
    this.compare = comparatorFunction || ((a, b) => a[1] - b[1]);
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  enqueue(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  dequeue() {
    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown();
    }

    return min;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (this.compare(parent, element) >= 0) {
        break;
      }

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.size();
    const element = this.heap[0];

    while (true) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;

      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (this.compare(leftChild, element) > 0) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && this.compare(rightChild, element) < 0) ||
          (swap !== null && this.compare(rightChild, leftChild) < 0)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.swap(index, swap);
      index = swap;
    }
  }
}

/* -------------------------------------------------------- */

const INF = 1e9; // 무한을 의미하는 값으로 10억 설정

const input = require('fs').readFileSync('./input2.txt').toString().split('\n');
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
  pq.enqueue([start, 0]);
  distance[start] = 0;

  while (pq.size() > 0) {
    const [current, dist] = pq.dequeue();

    if (visited[current]) continue;
    visited[current] = true;

    graph[current].forEach(([neighbor, weight]) => {
      const cost = dist + weight;

      if (cost < distance[neighbor]) {
        distance[neighbor] = cost;
        pq.enqueue([neighbor, cost]);
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

class Heap {
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
    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0) {
      if (this.compare(this.heap[parentIndex], this.heap[index]) <= 0) break; // 부모가 더 작으면 종료
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.size();

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      let swapIndex = index;

      if (
        leftChildIndex < length &&
        this.compare(this.heap[leftChildIndex], this.heap[swapIndex]) < 0
      ) {
        swapIndex = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.compare(this.heap[rightChildIndex], this.heap[swapIndex]) < 0
      ) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex === index) break;

      this.swap(index, swapIndex);
      index = swapIndex;
    }
  }
}

/* -------------------------------------------------------- */

const INF = 1e9; // 무한을 의미하는 값으로 10억 설정

const input = require('fs').readFileSync('./input.txt').toString().split('\n');
const [n, m, c] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);
const distance = Array(n + 1).fill(INF);

const start = c;

for (let i = 0; i < m; i++) {
  const [a, b, c] = arr[i];
  graph[a].push([b, c]);
}

function dijkstra(start) {
  const pq = new Heap();
  pq.enqueue([start, 0]);
  distance[start] = 0;

  while (pq.size() > 0) {
    const [current, dist] = pq.dequeue();

    if (distance[current] < dist) continue;

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

console.log(
  distance.filter((d) => d !== INF).length - 1,
  Math.max(...distance.filter((d) => d !== INF))
);

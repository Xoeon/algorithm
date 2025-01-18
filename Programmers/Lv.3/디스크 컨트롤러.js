class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(aIdx, bIdx) {
    [this.heap[aIdx], this.heap[bIdx]] = [this.heap[bIdx], this.heap[aIdx]];
  }

  compare(a, b) {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.heap.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      if (this.compare(this.heap[parentIdx], this.heap[idx])) break;

      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return min;
  }

  bubbleDown() {
    let idx = 0;
    let length = this.heap.length;

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let smallest = idx;

      if (
        leftChildIdx < length &&
        this.compare(this.heap[leftChildIdx], this.heap[smallest])
      ) {
        smallest = leftChildIdx;
      }

      if (
        rightChildIdx < length &&
        this.compare(this.heap[rightChildIdx], this.heap[smallest])
      ) {
        smallest = rightChildIdx;
      }

      if (smallest === idx) break;

      this.swap(idx, smallest);
      idx = smallest;
    }
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(jobs) {
  const heap = new MinHeap();

  jobs.forEach((job) => heap.insert(job));

  console.log(heap);
}

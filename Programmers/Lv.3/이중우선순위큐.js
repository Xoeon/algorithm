class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  enqueue(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();

    return min;
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const parentIdx = Math.floor((this.heap.length - 1) / 2);
    const leafNodes = this.heap.slice(parentIdx + 1);
    const maxIdx = parentIdx + 1 + leafNodes.indexOf(Math.max(...leafNodes));

    const max = this.heap[maxIdx];
    this.swap(maxIdx, this.heap.length - 1);
    this.heap.pop();

    return max;
  }

  _heapifyUp(idx = this.heap.length - 1) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[idx] >= this.heap[parentIdx]) break;
      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  _heapifyDown(idx = 0) {
    const length = this.heap.length;

    while (true) {
      const leftChildIdx = idx * 2 + 1;
      const rightChildIdx = idx * 2 + 2;
      let smallest = idx;

      if (
        leftChildIdx < length &&
        this.heap[leftChildIdx] < this.heap[smallest]
      ) {
        smallest = leftChildIdx;
      }

      if (
        rightChildIdx < length &&
        this.heap[rightChildIdx] < this.heap[smallest]
      ) {
        smallest = rightChildIdx;
      }

      if (smallest === idx) break;

      this.swap(idx, smallest);
      idx = smallest;
    }
  }
}

function solution(operations) {
  const minHeap = new MinHeap();

  operations.forEach((operation) => {
    const [op, num] = operation.split(' ');
    if (op === 'I') {
      minHeap.enqueue(+num);
    } else if (num === '1') {
      minHeap.extractMax();
    } else {
      minHeap.extractMin();
    }
  });

  if (minHeap.heap.length === 0) return [0, 0];
  if (minHeap.heap.length === 1) return [minHeap.heap[0], minHeap.heap[0]];

  return [minHeap.extractMax(), minHeap.extractMin()];
}

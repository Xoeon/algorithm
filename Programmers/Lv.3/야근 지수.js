class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  size() {
    return this.heap.length;
  }

  enqueue(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  dequeue() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();

    return max;
  }

  _heapifyUp(idx = this.size() - 1) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[idx] <= this.heap[parentIdx]) break;
      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  _heapifyDown(idx = 0) {
    const length = this.size();

    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let largest = idx;

      if (leftChildIdx < length && this.heap[largest] < this.heap[leftChildIdx])
        largest = leftChildIdx;
      if (
        rightChildIdx < length &&
        this.heap[largest] < this.heap[rightChildIdx]
      )
        largest = rightChildIdx;
      if (largest === idx) break;

      this.swap(idx, largest);
      idx = largest;
    }
  }

  calc() {
    return this.heap.reduce((a, c) => a + c ** 2, 0);
  }
}

function solution(n, works) {
  const heap = new MaxHeap();
  for (let w of works) {
    heap.enqueue(w);
  }

  while (n-- > 0) {
    let max = heap.dequeue();
    if (max === 0) break;

    if (--max > 0) heap.enqueue(max);
  }

  return heap.size() === 0 ? 0 : heap.calc();
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(aIndex, bIndex) {
    [this.heap[aIndex], this.heap[bIndex]] = [
      this.heap[bIndex],
      this.heap[aIndex],
    ];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[index] >= this.heap[parentIndex]) break;
      else this.swap(index, parentIndex);

      index = parentIndex;
    }
  }

  extractMin(value) {
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return min;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      this.swap(index, smallest);
      index = smallest;
    }
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  scoville.forEach((num) => minHeap.insert(num));

  let mixCount = 0;

  while (minHeap.peek() < K) {
    if (minHeap.size() < 2) return -1;

    const leastSpicy = minHeap.extractMin();
    const secondLeastSpicy = minHeap.extractMin();
    const newFood = leastSpicy + secondLeastSpicy * 2;

    minHeap.insert(newFood);
    mixCount++;
  }

  return mixCount;
}

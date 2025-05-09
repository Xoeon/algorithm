class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  enqueue(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  dequeue() {
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return max;
  }

  _heapifyUp(idx = this.heap.length - 1) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[idx] <= this.heap[parentIdx]) break;
      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  _heapifyDown(idx = 0) {
    const len = this.heap.length;
    while (true) {
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;
      let largest = idx;

      if (left < len && this.heap[left] > this.heap[largest]) largest = left;
      if (right < len && this.heap[right] > this.heap[largest]) largest = right;
      if (largest === idx) break;

      this.swap(idx, largest);
      idx = largest;
    }
  }

  size() {
    return this.heap.length;
  }
}

// 이분 탐색 ver
function solution1(n, k, enemy) {
  let left = 0;
  let right = enemy.length;
  let ans = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const curr = enemy.slice(0, mid).sort((a, b) => b - a);
    const need = curr.slice(k).reduce((sum, e) => sum + e, 0);

    if (need <= n) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}

// 이분 탐색 아닌 ver
function solution2(n, k, enemy) {
  const heap = new MaxHeap();
  let rounds = 0;

  for (let i = 0; i < enemy.length; i++) {
    const currEnemy = enemy[i];

    heap.enqueue(currEnemy);
    n -= currEnemy;

    if (n < 0) {
      if (k > 0) {
        n += heap.dequeue();
        k--;
      } else {
        break;
      }
    }
    rounds++;
  }

  return rounds;
}

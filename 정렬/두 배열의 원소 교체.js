let arrA = [1, 2, 5, 4, 3];
let arrB = [5, 5, 6, 6, 5];
let K = 3;

const quick_sort = (arr, start, end) => {
  if (start >= end) {
    return;
  }

  let pivot = start;
  let left = start + 1;
  let right = end;

  while (left <= right) {
    while (left <= end && arr[left] <= arr[pivot]) {
      left++;
    }
    while (right > start && arr[right] >= arr[pivot]) {
      right--;
    }

    if (left > right) {
      [arr[right], arr[pivot]] = [arr[pivot], arr[right]];
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  quick_sort(arr, start, right - 1);
  quick_sort(arr, right + 1, end);
};

quick_sort(arrA, 0, arrA.length - 1);
quick_sort(arrB, 0, arrB.length - 1);
arrB.reverse();

for (let i = 0; i < K; i++) {
  [arrA[i], arrB[i]] = [arrB[i], arrA[i]];
}

console.log(arrA.reduce((acc, curr) => (acc += curr)));

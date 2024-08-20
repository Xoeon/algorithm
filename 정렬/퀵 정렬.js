let array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];

const quick_sort = (arr, start, end) => {
  if (start >= end) {
    // 원소가 1개일 경우 종료
    return;
  }

  let pivot = start;
  let left = start + 1;
  let right = end;

  while (left <= right) {
    while (left <= end && array[left] <= array[pivot]) {
      left++;
    }
    while (right > start && array[right] >= array[pivot]) {
      right--;
    }

    if (left > right) {
      // 엇갈린다면 작은 데이터와 피벗 교체
      [array[right], array[pivot]] = [array[pivot], array[right]];
    } else {
      // 엇갈리지 않았다면 작은 데이터와 큰 데이터 교체
      [array[left], array[right]] = [array[right], array[left]];
    }
  }

  quick_sort(array, start, right - 1);
  quick_sort(array, right + 1, end);
};

quick_sort(array, 0, array.length - 1);
console.log(array);

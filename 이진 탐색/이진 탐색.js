const binary_serach = (array, target, start, end) => {
  if (start > end) {
    return;
  }

  mid = (start + end) / 2;

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    return binary_search(array, target, start, mid - 1);
  } else {
    return binary_search(array, target, mid + 1, end);
  }
};

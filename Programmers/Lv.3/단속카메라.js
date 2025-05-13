function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let cam = -Infinity;
  let count = 0;

  for (const [start, end] of routes) {
    if (start > cam) {
      cam = end;
      count++;
    }
  }

  return count;
}

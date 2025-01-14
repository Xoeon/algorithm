function solution(priorities, location) {
  const arr = priorities.map((priority, idx) => [priority, idx]);
  let order = 1;
  let ans = [];

  while (arr.length > 0) {
    let n = arr.shift();

    if (Math.max(n[0], ...arr.map((e) => e[0])) === n[0]) {
      ans.push([n[1], order]);
      order++;
      continue;
    } else arr.push(n);
  }

  return ans.find((e) => e[0] === location)[1];
}

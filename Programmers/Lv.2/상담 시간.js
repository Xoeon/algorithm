function solution(customers) {
  const map = new Map();
  const res = [];

  let sec = 0;
  let count = 0;
  let last = 0;
  let head = 0;

  while (head < customers.length) {
    count += map.get(sec) || 0;
    if (customers[head][0] === sec) {
      const [arrive, time, e] = customers[head++];
      if (count > e) {
        res.push(-1);
      } else {
        count++;
        last = Math.max(last, arrive) + time;
        res.push(last);
        map.set(last, (map.get(last) || 0) - 1);
      }
    }
    sec++;
  }

  return res;
}

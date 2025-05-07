function solution(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []);

  // 1. 그래프 만들기
  for (let [a, b, cost] of road) {
    graph[a].push([b, cost]);
    graph[b].push([a, cost]);
  }

  // 2. 다익스트라 알고리즘
  const distance = Array(N + 1).fill(Infinity);
  distance[1] = 0;

  const pq = [[1, 0]];

  while (pq.length) {
    pq.sort((a, b) => a[1] - b[1]);
    const [now, dist] = pq.shift();

    if (dist > distance[now]) continue;

    for (const [next, cost] of graph[now]) {
      const total = dist + cost;

      if (total < distance[next]) {
        distance[next] = total;
        pq.push([next, total]);
      }
    }
  }

  // 3. K 이하 거리인 마을 개수 세기
  return distance.filter((d) => d <= K).length;
}

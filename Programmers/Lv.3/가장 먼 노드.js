function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of edge) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const queue = [1];
  const distance = Array(n + 1).fill(-1);
  distance[1] = 0;

  let head = 0;
  while (head < queue.length) {
    const node = queue[head++];

    for (const linked of graph[node]) {
      // 방문하지 않은 노드 탐색
      if (distance[linked] === -1) {
        distance[linked] = distance[node] + 1;
        queue.push(linked);
      }
    }
  }

  const maxDist = Math.max(...distance);
  return distance.filter((d) => d === maxDist).length;
}

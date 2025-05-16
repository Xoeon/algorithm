function solution(n, roads, sources, destination) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of roads) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const dist = Array(n + 1).fill(-1);
  dist[destination] = 0;

  const queue = [destination];
  let head = 0;
  while (head < queue.length) {
    const node = queue[head++];
    const linked = graph[node];

    for (const l of linked) {
      if (dist[l] === -1) {
        dist[l] = dist[node] + 1;
        queue.push(l);
      }
    }
  }

  return sources.map((s) => dist[s]);
}

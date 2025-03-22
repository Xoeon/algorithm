function solution(n, wires) {
  let answer = Infinity;

  function buildGraph(excludeIdx) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let i = 0; i < wires.length; i++) {
      if (i === excludeIdx) continue;
      const [v1, v2] = wires[i];
      graph[v1].push(v2);
      graph[v2].push(v1);
    }
    return graph;
  }

  function bfs(start, graph, visited) {
    let count = 1;
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
      const node = queue.shift();
      for (let next of graph[node]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
          count++;
        }
      }
    }

    return count;
  }

  for (let i = 0; i < wires.length; i++) {
    const graph = buildGraph(i);
    const visited = Array(n + 1).fill(false);
    const count = bfs(1, graph, visited);
    const diff = Math.abs(n - count - count);
    answer = Math.min(answer, diff);
  }

  return answer;
}

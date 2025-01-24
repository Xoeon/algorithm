function solution(n, wires) {
  // 그래프를 인접 리스트로 변환하는 함수
  const buildGraph = (n, wires) => {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [v1, v2] of wires) {
      graph[v1].push(v2);
      graph[v2].push(v1);
    }
    return graph;
  };

  // BFS로 연결된 노드의 개수를 세는 함수
  const bfs = (start, graph, visited) => {
    const queue = [start];
    visited[start] = true;
    let count = 1;

    while (queue.length > 0) {
      const node = queue.shift();
      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
          count++;
        }
      }
    }

    return count;
  };

  let minDifference = Infinity;

  for (let i = 0; i < wires.length; i++) {
    // 전선을 하나 끊고 그래프 생성
    const tempWires = wires.slice(0, i).concat(wires.slice(i + 1));
    const graph = buildGraph(n, tempWires);

    // 연결된 두 네트워크의 크기 계산
    const visited = Array(n + 1).fill(false);
    const size1 = bfs(1, graph, visited); // 임의의 노드(1번)에서 시작
    const size2 = n - size1;

    // 최소 차이 갱신
    minDifference = Math.min(minDifference, Math.abs(size1 - size2));
  }

  return minDifference;
}

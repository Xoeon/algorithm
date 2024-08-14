const DFS = (graph, v, visited) => {
  visited[v] = true;
  console.log(`현재 노드: ${v}`);

  for (const i of graph[v]) {
    if (!visited[i]) {
      DFS(graph, i, visited);
    }
  }
};

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

const visited = Array(graph.length).fill(false);
DFS(graph, 1, visited);

const INF = 1e9; // 무한을 의미하는 값으로 10억 설정

const input = require('fs').readFileSync('./input.txt').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);

const visited = Array(n + 1).fill(false);
const distance = Array(n + 1).fill(INF);

const start = 1;

for (let i = 0; i < m; i++) {
  const [a, b, c] = arr[i];
  graph[a].push([b, c]);
}

// distance table에서 최단 거리를 뽑아내는 함수
function getSmallestNode(start) {
  let minValue = INF;
  let index = 0;

  // 거리가 가장 짧으면서 방문하지 않은 노드를 찾아낸다.
  for (let i = 1; i <= n; i++) {
    if (distance[i] < minValue && !visited[i]) {
      minValue = distance[i];
      index = i;
    }
  }
  return index;
}

function dijkstra(start) {
  distance[start] = 0;
  visited[start] = true;
  graph[start].forEach(([node, cost]) => {
    distance[node] = cost;
  });

  for (let i = 0; i < n - 1; i++) {
    const now = getSmallestNode();
    visited[now] = true;

    graph[now].forEach(([node, cost]) => {
      // 현재 노드까지의 최단 거리 + cost vs 기존 값
      const totalCost = distance[now] + cost;
      if (totalCost < distance[node]) {
        distance[node] = totalCost;
      }
    });
  }
}

dijkstra(start);

for (let i = 1; i <= n; i++) {
  if (distance[i] === INF) {
    console.log('INFINITY');
  } else {
    console.log(distance[i]);
  }
}

function solution(tickets) {
  const graph = {};

  // 1. 그래프 만들기
  for (const [from, to] of tickets) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }

  // 2. 도착지 리스트 사전 순 정렬
  for (const from in graph) {
    graph[from].sort();
  }

  const route = []; // 정답 경로
  const ticketCount = tickets.length;
  let found = false;

  // 3. DFS + BackTracking
  function dfs(current, path) {
    if (found) return;

    if (path.length === ticketCount + 1) {
      route.push(...path);
      found = true;
      return;
    }

    if (!graph[current]) return;

    for (let i = 0; i < graph[current].length; i++) {
      const next = graph[current][i];
      if (next === null) continue; // 이미 사용한 티켓 스킵

      // 티켓 사용
      graph[current][i] = null;
      dfs(next, [...path, next]);
      graph[current][i] = next;
    }
  }

  dfs("ICN", ["ICN"]);

  return route;
}

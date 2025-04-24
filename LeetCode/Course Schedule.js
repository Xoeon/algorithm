/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = new Map();
  for (const [course, prereq] of prerequisites) {
    if (!graph.has(prereq)) graph.set(prereq, []);
    graph.get(prereq).push(course);
  }

  // 0: unvisited, 1: visiting, 2: visited
  const visited = Array(numCourses).fill(0);

  const dfs = (node) => {
    if (visited[node] === 1) return false; // 현재 경로 중 다시 방문 -> 무한 루프
    if (visited[node] === 2) return true; // 이미 방문한 노드

    visited[node] = 1;

    for (const next of graph.get(node) || []) {
      if (!dfs(next)) return false;
    }

    visited[node] = 2;
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
};

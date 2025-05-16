function solution(n, costs) {
  // 1. 부모 테이블 초기화
  const parent = Array.from({ length: n }, (_, i) => i);

  // 2. find: 집합의 대표값 찾기 (경로 압축)
  function find(u) {
    if (parent[u] === u) return u;
    return (parent[u] = find(parent[u]));
  }

  // 3. union: 두 집합 합치기
  function union(u, v) {
    const pu = find(u);
    const pv = find(v);
    if (pu !== pv) parent[pv] = pu;
  }

  // 4. 비용 오름차순으로 간선 정렬
  costs = costs.sort((a, b) => a[2] - b[2]);

  // 5. Kruskal Algorithm, MST
  let totalCost = 0;
  let edgesUsed = 0;
  for (const [u, v, w] of costs) {
    if (find(u) !== find(v)) {
      union(u, v);
      totalCost += w;
      if (++edgesUsed === n - 1) break;
    }
  }

  return totalCost;
}

function solution_dfs(n, computers) {
  const visited = Array(n).fill(false);
  let networkCount = 0;

  function dfs(node) {
    visited[node] = true;
    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      networkCount++;
    }
  }

  return networkCount;
}

function solution_bfs(n, computers) {
  const visited = Array(n).fill(false);
  let networkCount = 0;

  function bfs(start) {
    const queue = [start];
    visited[start] = true;
    let head = 0;

    while (head < queue.length) {
      const node = queue[head++];
      for (let i = 0; i < n; i++) {
        if (computers[node][i] === 1 && !visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      networkCount++;
    }
  }

  return networkCount;
}

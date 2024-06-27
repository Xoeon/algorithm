from collections import deque

# BFS 메서드 정의
def bfs (graph, node, visited): 
  # 큐 구현을 위한 deque 라이브러리 사용
  queue = deque([node])
  # 현재 노드 방문 처리
  visited[node] = True

  # 큐가 빌 때까지 반복
  while queue:
    # 큐에 삽입된 순서로 노드 꺼내기
    v = queue.popleft()
    # 탐색 순서 출력
    print(v, end=' ')
    # 현재 처리 중인 노드에서 방문하지 않은 인접 노드를 모두 큐에 삽입
    for i in graph[v]:
      if not (visited[i]):
        queue.append(i)
        visited[i] = True

# 노드 연결 정보를 담은 2차원 리스트
graph = [
  [],
  [2, 3],
  [1, 8],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7, 8],
  [6, 8],
  [2, 6, 7]
]

# 노드 방문 정보를 담은 1차원 리스트
visited = [False] * 9

# 노드 1부터 시작
bfs(graph, 1, visited)
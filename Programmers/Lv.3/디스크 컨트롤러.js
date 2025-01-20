function solution(jobs) {
  // 각 작업에 인덱스(작업 번호) 붙이기
  const indexedJobs = jobs.map((job, idx) => [job[0], job[1], idx]);
  // 요청 시각 기준 정렬
  indexedJobs.sort((a, b) => a[0] - b[0]);

  let currentTime = 0; // 현재 시각
  let totalTurnaround = 0; // 총 반환 시간
  let count = 0; // 처리된 작업 수
  let i = 0; // jobs 순회 인덱스
  const waiting = []; // 대기 큐

  while (count < indexedJobs.length) {
    // 현재 시각까지 들어온 작업 대기 큐에 추가
    while (i < indexedJobs.length && indexedJobs[i][0] <= currentTime) {
      waiting.push(indexedJobs[i]);
      i++;
    }

    // 대기 큐가 비어 있으면 다음 작업의 요청 시각으로 건너뜀
    if (waiting.length === 0) {
      currentTime = indexedJobs[i][0];
      continue;
    }

    // 우선순위(소요시간 → 요청시각 → 작업번호)로 정렬
    waiting.sort((a, b) => {
      if (a[1] === b[1]) {
        if (a[0] === b[0]) return a[2] - b[2];
        return a[0] - b[0];
      }
      return a[1] - b[1];
    });

    const [start, duration] = waiting.shift();
    currentTime += duration; // 작업 실행 후 시각 갱신
    totalTurnaround += currentTime - start; // 반환 시간 누적
    count++;
  }

  return Math.floor(totalTurnaround / jobs.length);
}

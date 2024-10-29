function solution(id_list, reports, k) {
  const userReports = new Map();
  const reportCount = new Map();

  // 초기화: 각 사용자의 신고 목록과 신고 횟수를 저장할 맵 생성
  id_list.forEach((id) => {
    userReports.set(id, new Set()); // 각 사용자의 신고 목록을 Set으로 초기화하여 중복 신고 방지
    reportCount.set(id, 0); // 각 사용자의 신고 횟수를 0으로 초기화
  });

  // 신고 처리: 중복을 제거하면서 신고자와 신고된 사람의 관계 저장
  reports.forEach((report) => {
    const [reporter, reported] = report.split(' ');
    userReports.get(reporter).add(reported);
  });

  // 신고 횟수 집계
  userReports.forEach((reportedSet) => {
    reportedSet.forEach((reported) => {
      reportCount.set(reported, (reportCount.get(reported) || 0) + 1);
    });
  });

  // 정지된 사용자 목록 생성
  const bannedUsers = new Set(
    [...reportCount.entries()]
      .filter(([, count]) => count >= k)
      .map(([name]) => name)
  );

  // 각 사용자가 받은 메일 횟수 계산
  return id_list.map((id) => {
    const reports = userReports.get(id);
    return [...reports].filter((user) => bannedUsers.has(user)).length;
  });
}

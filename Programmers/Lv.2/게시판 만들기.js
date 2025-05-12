function solution(members, logs) {
  // 1. 기본 세팅
  const idxMap = Object.fromEntries(members.map((m, i) => [m, i]));
  const res = Array(members.length).fill(0);
  const settings = Object.fromEntries(
    members.map((m) => [m, { article: true, comment: true }])
  );

  // 2. 상태 저장용 객체 선언
  const articleAuthor = {};
  const articleParticipants = {};
  const commentCount = {};
  const commentAuthor = {};
  const commentParent = {};
  const subCommenters = {};
  const threshold = {};

  // 3. 로그 순회
  for (let log of logs) {
    const [user, type, ...rest] = log;

    if (type === "ALARM") {
      const alarmType = rest[0].toLowerCase();
      settings[user][alarmType] = !settings[user][alarmType];
    } else if (type === "ARTICLE") {
      const [articleId] = rest;

      articleAuthor[articleId] = user;
      articleParticipants[articleId] = new Set();
      commentCount[articleId] = 0;
      threshold[articleId] = false;

      // 글 알림: article 설정이 true인 모든 회원(작성자 제외)
      for (const member of members) {
        if (member !== user && settings[member].article) {
          res[idxMap[member]]++;
        }
      }
    } else if (type === "COMMENT") {
      const [commentId, articleId] = rest;

      // 댓글 수 갱신 & 임계치 체크
      commentCount[articleId]++;
      if (commentCount[articleId] >= 5) threshold[articleId] = true;
      const bybass = threshold[articleId];

      // 알림 대상 = 글 작성자 + 기존 참여자(댓글 작성자 + 대댓글 작성자)
      const recipients = new Set([
        articleAuthor[articleId],
        ...articleParticipants[articleId],
      ]);
      recipients.delete(user);

      for (const recipient of recipients) {
        if (bybass || settings[recipient].comment) {
          res[idxMap[recipient]]++;
        }
      }

      commentAuthor[commentId] = user;
      commentParent[commentId] = articleId;
      subCommenters[commentId] = new Set();
      articleParticipants[articleId].add(user);
    } else if (type === "SUB_COMMENT") {
      const [_, parentCommentId] = rest;
      const articleId = commentParent[parentCommentId];

      // 댓글, 대댓글 수 갱신 & 임계치 체크
      commentCount[articleId]++;
      if (commentCount[articleId] >= 5) threshold[articleId] = true;
      const bybass = threshold[articleId];

      // 알림 대상 = 댓글 작성자 + 대댓글 작성자
      const recipients = new Set([
        commentAuthor[parentCommentId],
        ...subCommenters[parentCommentId],
      ]);
      recipients.delete(user);

      for (const recipient of recipients) {
        if (bybass || settings[recipient].comment) {
          res[idxMap[recipient]]++;
        }
      }

      subCommenters[parentCommentId].add(user);
      articleParticipants[articleId].add(user);
    }
    console.log(res);
  }

  // 4. 최종 리턴 (members 순서대로 배열 반환)
  return res;
}

const members = ["A", "E", "F"];
const logs = [
  ["A", "ALARM", "COMMENT"],
  ["E", "ALARM", "ARTICLE"],
  ["F", "ARTICLE", 1],
  ["A", "COMMENT", 2, 1],
  ["F", "COMMENT", 3, 1],
  ["E", "SUB_COMMENT", 4, 3],
  ["A", "SUB_COMMENT", 5, 3],
  ["F", "ALARM", "COMMENT"],
  ["A", "SUB_COMMENT", 6, 3],
  ["E", "COMMENT", 7, 1],
];

console.log(solution(members, logs)); // [2, 2, 4]

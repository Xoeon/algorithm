function solution(members, logs) {
  const idx = Object.fromEntries(members.map((m, i) => [m, i]));
  const result = Array(members.length).fill(0);
  const setting = Object.fromEntries(
    members.map((m) => [m, { article: true, comment: true }])
  );

  const articleAuthor = {},
    commentAuthor = {},
    commentParent = {};
  const subCommenters = {},
    articleParticipants = {};
  const commentCount = {},
    threshold = {};

  for (const log of logs) {
    const [user, type] = log;

    if (type === "ALARM") {
      const cat = log[2].toLowerCase();
      setting[user][cat] = !setting[user][cat];
    } else if (type === "ARTICLE") {
      const aid = log[2];
      articleAuthor[aid] = user;
      commentCount[aid] = 0;
      threshold[aid] = false;
      articleParticipants[aid] = new Set();

      for (const m of members) {
        if (m !== user && setting[m].article) {
          result[idx[m]]++;
        }
      }
    } else if (type === "COMMENT") {
      const cid = log[2],
        aid = log[3];
      articleParticipants[aid] ||= new Set();
      const wasTh = threshold[aid];

      const rec = new Set([articleAuthor[aid], ...articleParticipants[aid]]);
      rec.delete(user);
      for (const r of rec) {
        if (!setting[r]) continue;
        if (wasTh || setting[r].comment) {
          result[idx[r]]++;
        }
      }

      commentAuthor[cid] = user;
      commentParent[cid] = aid;
      subCommenters[cid] ||= new Set();
      articleParticipants[aid].add(user);

      commentCount[aid]++;
      if (!threshold[aid] && commentCount[aid] >= 5) {
        threshold[aid] = true;
      }
    } else if (type === "SUB_COMMENT") {
      const scid = log[2],
        pcid = log[3];
      const aid = commentParent[pcid];
      const wasTh = threshold[aid];

      subCommenters[pcid] ||= new Set();
      const rec = new Set([commentAuthor[pcid], ...subCommenters[pcid]]);
      rec.delete(user);
      for (const r of rec) {
        if (!setting[r]) continue;
        if (wasTh || setting[r].comment) {
          result[idx[r]]++;
        }
      }

      subCommenters[pcid].add(user);
      commentCount[aid]++;
      if (!threshold[aid] && commentCount[aid] >= 5) {
        threshold[aid] = true;
      }
    }
  }

  return result;
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

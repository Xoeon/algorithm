function solution(user_id, banned_id) {
  const ul = user_id.length;
  const bl = banned_id.length;
  const ans = new Set();

  // 1. 자리별 매칭
  const match = (uid, bid) => {
    if (uid.length !== bid.length) return false;
    for (let i = 0; i < ul; i++) {
      if (bid[i] !== "*" && bid[i] !== uid[i]) return false;
    }
    return true;
  };

  // 2. 패턴별 후보 배열
  const candidates = banned_id.map((b) => user_id.filter((u) => match(u, b)));

  // 3. 모든 조합 탐색
  const dfs = (idx, picked) => {
    if (idx === bl) {
      ans.add(JSON.stringify(picked.slice().sort()));
      return;
    }

    for (const u of candidates[idx]) {
      if (!picked.includes(u)) {
        picked.push(u);
        dfs(idx + 1, picked);
        picked.pop();
      }
    }
  };

  dfs(0, []);
  return ans.size;
}

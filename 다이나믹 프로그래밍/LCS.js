function canDeleteToEqual(s, t, maxDel) {
  // s가 더 길거나 같도록
  if (s.length < t.length) [s, t] = [t, s];
  // 길이 차이로 바로 불가 판정
  if (s.length - t.length > maxDel) return false;

  let i = 0,
    j = 0,
    del = 0;
  // s만 삭제하며 t를 순차 매칭
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      if (++del > maxDel) return false;
      i++;
    }
  }
  // t의 남은 글자가 있으면 변환 불가
  if (j < t.length) return false;

  // s의 남은 글자는 모두 삭제해야 함
  del += s.length - i;
  return del <= maxDel;
}

function isNickSimilar(a, b) {
  return canDeleteToEqual(a, b, 2);
}

function isEmailSimilar(a, b) {
  const [la] = a.split("@");
  const [lb] = b.split("@");

  if (la === lb) return true;
  return canDeleteToEqual(a, b, 1);
}

function solution(nicks, emails) {
  const n = nicks.length;
  const parent = Array.from({ length: n }, (_, i) => i);

  const find = (x) => {
    return parent[x] === x ? x : (parent[x] = find(parent[x]));
  };
  const union = (x, y) => {
    const px = find(x),
      py = find(y);
    if (px !== py) parent[py] = px;
  };

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (
        isNickSimilar(nicks[i], nicks[j]) &&
        isEmailSimilar(emails[i], emails[j])
      ) {
        union(i, j);
      }
    }
  }

  const roots = new Set();
  for (let i = 0; i < n; i++) roots.add(find(i));
  return roots.size;
}

const nicks = [
  "imhero111",
  "moneyman",
  "hero111",
  "imher1111",
  "hro111",
  "mmoneyman",
  "moneymann",
];

const emails = [
  "superman5@abcd.com",
  "batman432@korea.co.kr",
  "superman@abcd.com",
  "supertman5@abcd.com",
  "superman@erty.net",
  "batman42@korea.co.kr",
  "batman432@usa.com",
];

console.log(solution(nicks, emails));

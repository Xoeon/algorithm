function solution(msg) {
  const dict = {};
  const result = [];
  let dictSize = 26;

  // init dictionary
  for (let i = 0; i < 26; i++) {
    dict[String.fromCharCode(65 + i)] = i + 1;
  }

  let w = '';
  for (let i = 0; i < msg.length; i++) {
    let c = msg[i];
    let wc = w + c;

    if (dict[wc]) {
      w = wc;
    } else {
      result.push(dict[w]);
      dict[wc] = ++dictSize;
      w = c;
    }
  }

  // 마지막 문자열 처리
  if (w) result.push(dict[w]);

  return result;
}

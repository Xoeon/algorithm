function checkStr(s) {
  const match = { ')': '(', '}': '{', ']': '[' };

  const arr = s.split('');
  const stack = [];
  let count = 0;

  for (let bracket of arr) {
    if (bracket in match) {
      if (stack.pop() !== match[bracket]) return false;
    } else stack.push(bracket);
  }

  return stack.length === 0;
}

function solution(s) {
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    if (hash[s]) continue;
    else hash[s] = checkStr(s);

    s = s.substring(1) + s[0];
  }

  return Object.values(hash).filter((value) => value === true).length;
}

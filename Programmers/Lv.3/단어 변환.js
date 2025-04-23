function isNext(current, next) {
  let count = 0;
  for (let i = 0; i < current.length; i++) {
    if (current[i] !== next[i]) count++;
    if (count > 1) return false;
  }
  return count === 1;
}

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const queue = [[begin, 0]];
  const visited = new Set();

  while (queue.length) {
    const [current, count] = queue.shift();
    if (current === target) return count;

    for (const word of words) {
      if (!visited.has(word) && isNext(current, word)) {
        visited.add(word);
        queue.push([word, count + 1]);
      }
    }
  }

  return 0;
}

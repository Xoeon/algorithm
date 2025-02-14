function isAlphabet(char) {
  return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ? true : false;
}

function extractSet(string) {
  const arr = [];
  for (let i = 0; i < string.length - 1; i++) {
    if (isAlphabet(string[i]) && isAlphabet(string[i + 1])) {
      arr.push(string[i] + string[i + 1]);
    }
  }
  return arr;
}

function solution(str1, str2) {
  const NUM = 65536;
  const arr1 = extractSet(str1.toLowerCase()),
    arr2 = extractSet(str2.toLowerCase());

  if (arr1.length === 0 && arr2.length === 0) return NUM;

  const map1 = new Map();
  const map2 = new Map();

  for (str of arr1) map1.set(str, (map1.get(str) || 0) + 1);
  for (str of arr2) map2.set(str, (map2.get(str) || 0) + 1);

  let intersection = 0;
  let union = 0;

  const keys = new Set([...map1.keys(), ...map2.keys()]);
  for (let key of keys) {
    const count1 = map1.get(key) || 0;
    const count2 = map2.get(key) || 0;
    intersection += Math.min(count1, count2);
    union += Math.max(count1, count2);
  }

  return Math.floor((intersection / union) * NUM);
}

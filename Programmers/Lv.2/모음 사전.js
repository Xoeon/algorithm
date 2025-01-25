function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  let result = 0;

  const weights = [781, 156, 31, 6, 1]; // (5^4 + 5^3 + 5^2 + 5^1 + 5^0)/5

  for (let i = 0; i < word.length; i++) {
    const index = vowels.indexOf(word[i]);
    result += index * weights[i] + 1;
  }

  return result;
}

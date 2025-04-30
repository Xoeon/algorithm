function solution(sequence, k) {
  let start = 0,
    end = 0;
  let sum = sequence[0];
  let answer = [0, Infinity];

  while (start < sequence.length) {
    if (sum === k) {
      if (end - start < answer[1] - answer[0]) {
        answer = [start, end];
      }
      sum -= sequence[start++];
    } else if (sum < k) {
      if (end + 1 >= sequence.length) break;
      sum += sequence[++end];
    } else {
      sum -= sequence[start++];
    }
  }

  return answer;
}

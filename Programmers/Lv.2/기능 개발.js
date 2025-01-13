function solution(progresses, speeds) {
  const days = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  const ans = [];
  let now = days[0];
  let count = 0;

  for (const day of days) {
    if (day <= now) {
      count++;
    } else {
      ans.push(count);
      now = day;
      count = 1;
    }
  }

  ans.push(count);
  return ans;
}

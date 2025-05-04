function minPlusToSave(day, dDay, k) {
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const dayIndex = days.indexOf(day.toLowerCase());
  const startDate = new Date("2022-01-01");
  const targetDate = new Date(dDay);

  const diffDays =
    Math.floor((targetDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
  const maxMonths = Math.ceil(diffDays / 30);

  function canSaveWithPlus(plus) {
    let total = 0;
    for (let m = 0; m < maxMonths; m++) {
      const base = plus * m;
      const monthStart = m * 30;
      for (let d = 0; d < 30; d++) {
        const globalDay = monthStart + d;
        if (globalDay >= diffDays) return total >= k;
        const weekday = (dayIndex + globalDay) % 7;
        if (weekday >= 1 && weekday <= 5) {
          // mon~fri
          total += base;
        }
      }
    }
    return total >= k;
  }

  let left = 0;
  let right = 1e6;
  let answer = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canSaveWithPlus(mid)) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

console.log(minPlusToSave("mon", "2022-02-04", 300000)); // 16667
console.log(minPlusToSave("thu", "2022-03-01", 220000)); // 0
console.log(minPlusToSave("sat", "2022-01-08", 100000)); // -1
console.log(minPlusToSave("sun", "2022-01-05", 20000)); // 0

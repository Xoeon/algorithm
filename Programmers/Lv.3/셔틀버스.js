function solution(n, t, m, timetable) {
  // "HH:MM" -> 분
  const toMin = (time) => {
    const [h, mm] = time.split(":").map(Number);
    return h * 60 + mm;
  };

  // 분 -> "HH:MM"
  const toHHMM = (min) => {
    const hh = String(Math.floor(min / 60)).padStart(2, "0");
    const mm = String(min % 60).padStart(2, "0");
    return `${hh}:${mm}`;
  };

  // 크루 도착 시각 정렬
  const crew = timetable.map(toMin).sort((a, b) => a - b);
  let idx = 0,
    lastArrival;

  // 시뮬레이션
  for (let i = 0; i < n; i++) {
    const busTime = 9 * 60 + i * t;
    let boarded = 0,
      lastCrewTime;

    while (boarded < m && idx < crew.length && crew[idx] <= busTime) {
      lastCrewTime = crew[idx++];
      boarded++;
    }

    if (i === n - 1) {
      // 마지막 셔틀
      lastArrival = boarded < m ? busTime : lastCrewTime - 1;
    }
  }

  return toHHMM(lastArrival);
}

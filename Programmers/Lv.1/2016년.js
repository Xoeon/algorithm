const solution = (a, b) => {
  const days = {
    1: 0,
    2: 31,
    3: 29,
    4: 31,
    5: 30,
    6: 31,
    7: 30,
    8: 31,
    9: 31,
    10: 30,
    11: 31,
    12: 30,
  };
  const week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  let n = 0;

  for (let i = 1; i <= a; i++) {
    n += days[i];
  }

  return week[(n + b) % 7];
};

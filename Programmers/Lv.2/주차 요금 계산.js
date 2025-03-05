function add(arr1, arr2) {
  return [arr1[0] + arr2[0], arr1[1] + arr2[1]];
}

function solution(fees, records) {
  const [basicTime, basicFee, timeUnit, feeUnit] = fees;
  const count = {};
  const timeMap = {};

  for (let record of records) {
    const [time, num, status] = record.split(' ');
    const [h, m] = time.split(':').map(Number);

    if (status === 'IN') {
      timeMap[num] = add(timeMap[num] || [0, 0], [-h, -m]);
    } else {
      timeMap[num] = add(timeMap[num], [h, m]);
    }
    count[num] = (count[num] || 0) + 1;
  }

  function calcFee(h, m) {
    const time = h * 60 + m;
    return time > basicTime
      ? basicFee + Math.ceil((time - basicTime) / timeUnit) * feeUnit
      : basicFee;
  }

  return Object.entries(timeMap)
    .map((e) => {
      const [num, sumOfTime] = e;
      let [h, m] = sumOfTime;
      if (count[num] % 2 !== 0) {
        h += 23;
        m += 59;
      }
      return [num, calcFee(h, m)];
    })
    .sort((a, b) => a[0] - b[0])
    .map((e) => e[1]);
}

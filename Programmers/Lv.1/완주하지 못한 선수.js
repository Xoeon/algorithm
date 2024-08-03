const solution = (participant, completion) => {
  let pCount = {};
  let cCount = {};

  participant.forEach(
    (name) => (pCount[name] = pCount[name] ? pCount[name] + 1 : 1)
  );
  completion.forEach(
    (name) => (cCount[name] = cCount[name] ? cCount[name] + 1 : 1)
  );

  let answer = "";
  for (name in pCount) {
    if (pCount[name] !== cCount[name]) {
      answer = name;
    }
  }

  return answer;
};

const solution = (n, lost, reserve) => {
  let participants = new Array(n).fill(1);

  for (let i = 0; i < lost.length; i++) {
    participants[lost[i] - 1]--;
  }

  for (let i = 0; i < reserve.length; i++) {
    participants[reserve[i] - 1]++;
  }

  for (let i = 0; i < participants.length; i++) {
    if (participants[i] == 0) {
      if (participants[i - 1] >= 2) {
        participants[i - 1]--;
      } else if (participants[i + 1] >= 2) {
        participants[i + 1]--;
      } else {
        continue;
      }
      participants[i]++;
    }
  }

  return participants.filter((participant) => participant).length;
};

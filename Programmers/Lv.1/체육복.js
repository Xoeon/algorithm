const solution = (n, lost, reserve) => {
  let participants = new Array(n).fill(1); // 전체 학생 수만큼의 배열을 만들고 1로 채움.

  for (let i = 0; i < lost.length; i++) {
    // 체육복을 잃어버린 학생은 0
    participants[lost[i] - 1]--;
  }

  for (let i = 0; i < reserve.length; i++) {
    // 체육복 여분이 있는 학생은 2
    participants[reserve[i] - 1]++;
  }

  // participants 배열을 돌면서
  for (let i = 0; i < participants.length; i++) {
    if (participants[i] == 0) {
      // 체육복이 없으면
      if (participants[i - 1] == 2) {
        // 앞 번호 학생이 여분이 있는지 확인
        participants[i - 1]--;
      } else if (participants[i + 1] == 2) {
        // 뒷 번호 학생이 여분이 있는지 확인
        participants[i + 1]--;
      } else {
        // 아무도 없으면 다음 루프로 넘어감.
        continue;
      }
      participants[i]++; // 여분이 아무도 없는 경우를 제외하고는 현재 학생은 여분이 생김.
    }
  }

  return participants.filter((participant) => participant).length;
};

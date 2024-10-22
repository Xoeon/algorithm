function solution(players, callings) {
  const idx = {};
  for (let i = 0; i < players.length; i++) {
    idx[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    const idx1 = idx[callings[i]];
    const idx2 = idx1 - 1;
    const player1 = players[idx1];
    const player2 = players[idx2];

    [players[idx1], players[idx2]] = [players[idx2], players[idx1]];
    idx[player1]--;
    idx[player2]++;
  }

  return players;
}

function solution(players, m, k) {
  let count = 0;
  let server = 0;
  const time = Array(players.length).fill(0);

  for (let i = 0; i < players.length; i++) {
    server += time[i];
    const need = Math.floor(players[i] / m);
    if (need > server) {
      time[i + k] = server - need;
      count += need - server;
      server = need;
    }
  }

  return count;
}

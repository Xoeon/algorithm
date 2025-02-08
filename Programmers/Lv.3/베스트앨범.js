function solution(genres, plays) {
  const hash = {};
  const count = {};
  const n = genres.length;

  for (let i = 0; i < n; i++) {
    if (!hash[genres[i]]) {
      hash[genres[i]] = [plays[i]];
    } else {
      hash[genres[i]].push(plays[i]);
    }

    count[genres[i]] = (count[genres[i]] || 0) + plays[i];
  }

  const topGenres = Object.entries(count).sort((a, b) => b[1] - a[1]);

  for (let entry of Object.entries(hash)) {
    const [genre, arr] = entry;
    hash[genre] = arr.sort((a, b) => b - a);
  }

  const ans = [];

  for (let entry of topGenres) {
    const genre = entry[0];

    for (let i = 0; i < 2; i++) {
      if (hash[genre][i]) {
        ans.push(plays.indexOf(hash[genre][i]));
      }
    }
  }

  return ans;
}

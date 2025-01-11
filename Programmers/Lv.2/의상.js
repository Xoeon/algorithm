function solution(clothes) {
  const hash = {};
  let ans = 1;

  clothes.forEach((cloth) => {
    hash[cloth[1]] = (hash[cloth[1]] || 0) + 1;
  });

  for (let i in hash) {
    ans *= hash[i] + 1;
  }

  return ans - 1;
}

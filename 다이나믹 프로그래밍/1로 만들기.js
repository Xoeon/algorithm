let x = 26;
const hash = [];

hash[1] = 0;
hash[2] = 1;
hash[3] = 1;
hash[5] = 1;

for (let i = 4; i <= x; i++) {
  hash[i] = hash[i - 1];

  if (i % 5 === 0) {
    hash[i] = Math.min(hash[i], hash[i / 5]);
  }
  if (i % 3 === 0) {
    hash[i] = Math.min(hash[i], hash[i / 3]);
  }
  if (i % 2 === 0) {
    hash[i] = Math.min(hash[i], hash[i / 2]);
  }

  hash[i]++;
}

console.log(hash[x]);

let x = 26;
const hash = [];

hash[2] = 1;
hash[3] = 1;
hash[5] = 1;

const dp = (x) => {
  let temp = [];

  if (!hash[x]) {
    if (x % 5 === 0) {
      console.log('5로 나눈다.');
      temp.push(hash[x / 5]);
    }
    if (x % 3 === 0) {
      console.log('3로 나눈다.');
      temp.push(hash[x / 3]);
    }
    if (x % 2 === 0) {
      console.log('2로 나눈다.');
      temp.push(hash[x / 2]);
    }

    temp.push(hash[x - 1]);

    hash[x] = Math.min(...temp) + 1;
  }
};

for (let i = 4; i <= x; i++) {
  dp(i);
}

console.log(hash[x]);

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function solution(name) {
  const count = [];
  name.split("").forEach((char) => {
    const charCode = char.charCodeAt(0);
    count.push(
      Math.min(charCode - "A".charCodeAt(0), "Z".charCodeAt(0) - charCode + 1)
    );
  });
  console.log(count);

  if (!count.includes(0)) {
    return count.reduce((acc, curr) => acc + curr, 0) + count.length - 1;
  } else {
  }

  const reversedCount = [count[0]];
  reversedCount.push(...count.slice(1).reverse());
  console.log(reversedCount);
}

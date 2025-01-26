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
    count.push(
      Math.min(
        Math.abs(alphabet.indexOf("A") - alphabet.indexOf(char)),
        Math.abs(alphabet.indexOf("A") - alphabet.indexOf(char) + 26)
      )
    );
  });
  console.log(count);

  let pointer = 0;
  while (true) {
    if (count[pointer + 1] === 0) {
    }
  }
}

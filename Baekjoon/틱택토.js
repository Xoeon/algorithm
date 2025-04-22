const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const isWin = (b, m) => {
  return (
    (b[0] === m && b[1] === m && b[2] === m) ||
    (b[0] === m && b[3] === m && b[6] === m) ||
    (b[0] === m && b[4] === m && b[8] === m) ||
    (b[1] === m && b[4] === m && b[7] === m) ||
    (b[2] === m && b[5] === m && b[8] === m) ||
    (b[2] === m && b[4] === m && b[6] === m) ||
    (b[3] === m && b[4] === m && b[5] === m) ||
    (b[6] === m && b[7] === m && b[8] === m)
  );
};

for (const line of input) {
  if (line === "end") break;

  const board = line.split("");
  const X = board.filter((c) => c === "X").length;
  const O = board.filter((c) => c === "O").length;

  const xWin = isWin(board, "X");
  const oWin = isWin(board, "O");

  let result = "";

  if (O > X || X > O + 1) {
    result = "invalid";
  } else if (xWin && oWin) {
    result = "invalid";
  } else if (xWin && X === O + 1) {
    result = "valid";
  } else if (oWin && O === X) {
    result = "valid";
  } else if (!xWin && !oWin && X + O === 9) {
    result = "valid";
  } else {
    result = "invalid";
  }

  console.log(result);
}

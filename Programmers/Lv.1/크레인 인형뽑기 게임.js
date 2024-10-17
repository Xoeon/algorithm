function solution(board, moves) {
  const arr = [[]];
  const basket = [];
  let count = 0;

  for (let i = 0; i < board.length; i++) {
    let temp = [];
    for (let j = board.length - 1; j >= 0; j--) {
      if (board[j][i] !== 0) {
        temp.push(board[j][i]);
      }
    }
    arr.push(temp);
  }

  for (let move of moves) {
    const pop = arr[move].pop();
    const len = basket.length;

    if (!pop) continue;

    if (len > 0 && basket[len - 1] === pop) {
      basket.pop();
      count += 2;
    } else {
      basket.push(pop);
    }
  }

  return count;
}

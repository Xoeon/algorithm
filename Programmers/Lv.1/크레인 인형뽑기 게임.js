function solution(board, moves) {
  const arr = [[]]; // board를 line별로 정렬할 배열
  const basket = []; // 뽑은 인형을 쌓을 바구니
  let count = 0; // 터진 인형 개수 카운트

  // board 배열을 line별로 정렬
  for (let i = 0; i < board.length; i++) {
    let temp = [];
    for (let j = board.length - 1; j >= 0; j--) {
      if (board[j][i] !== 0) {
        temp.push(board[j][i]);
      }
    }
    arr.push(temp);
  }

  // moves 배열을 순회하면서 인형을 바구니에 담는다.
  for (let move of moves) {
    const pop = arr[move].pop(); // 해당 line에 가서 가장 상단에 쌓인 인형을 pop
    const len = basket.length;

    if (!pop) continue; // 만약 뽑힌 인형이 없으면 다음 순회로 건너뛴다.

    if (len > 0 && basket[len - 1] === pop) {
      // 적어도 쌓인 인형이 1개 이상이고, 뽑은 인형과 바구니의 최상단 인형이 같을 경우
      basket.pop(); // basket에 쌓인 인형을 pop
      count += 2; // 터진 인형 수 카운트
    } else {
      // 그게 아니면 바구니에 인형을 담는다.
      basket.push(pop);
    }
  }

  return count;
}

function solution(m, n, board) {
  function initBoard() {
    const reversed = [];

    // 배열 뒤집기
    for (let i = 0; i < n; i++) {
      const temp = [];
      for (let j = m - 1; j >= 0; j--) temp.push(board[j][i]);
      reversed.push(temp);
    }

    // pop에 이용할 boolean 값 추가
    for (let i = 0; i < reversed.length; i++) {
      for (let j = 0; j < reversed[i].length; j++) {
        reversed[i][j] = [reversed[i][j], false];
      }
    }

    return reversed;
  }

  // 함께 4개 이상 배치된 블록 탐색
  function searchBoard() {
    for (let i = 0; i < board.length - 1; i++) {
      for (let j = 0; j < board[i].length - 1; j++) {
        if (
          !board[i][j] ||
          !board[i + 1][j] ||
          !board[i][j + 1] ||
          !board[i + 1][j + 1]
        )
          continue;

        const target = board[i][j][0];
        if (
          target === board[i + 1][j][0] &&
          target === board[i][j + 1][0] &&
          target === board[i + 1][j + 1][0]
        ) {
          board[i][j][1] = true;
          board[i + 1][j][1] = true;
          board[i][j + 1][1] = true;
          board[i + 1][j + 1][1] = true;
        }
      }
    }
  }

  // true인 block을 pop 및 pop 개수 반환
  function popAndCount() {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
      let pointer = 0;
      for (let j = 0; j < board[i].length; j++) {
        if (!board[i][j][1]) {
          board[i][pointer++] = board[i][j];
        } else {
          count++;
        }
      }
      board[i].length = pointer;
    }

    return count;
  }

  board = initBoard();
  let ans = 0;

  while (true) {
    searchBoard();
    let count = popAndCount();

    if (count === 0) return ans;
    else ans += count;
  }
}

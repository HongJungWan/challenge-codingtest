function solution(m, n, board) {
  let curBoard = [...board.map((block) => [...block])].concat();
  let newBoard = [...board.map((block) => [...block])].concat();

  while (true) {
    let count = 0;
    for (let x = 0; x < m - 1; x++) {
      for (let y = 0; y < n - 1; y++) {
        if (curBoard[x][y] === '') continue;
        if (
          curBoard[x][y] === curBoard[x][y + 1] &&
          curBoard[x][y] === curBoard[x + 1][y] &&
          curBoard[x][y] === curBoard[x + 1][y + 1]
        ) {
          newBoard[x][y] = '';
          newBoard[x + 1][y] = '';
          newBoard[x][y + 1] = '';
          newBoard[x + 1][y + 1] = '';
          count += 1;
        }
      }
    }

    for (let x = 0; x < m - 1; x++) {
      for (let y = 0; y < n; y++) {
        if (newBoard[x + 1][y] === '') {
          for (let i = x; i >= 0; i--) {
            newBoard[i + 1][y] = newBoard[i][y];
            newBoard[i][y] = '';
          }
        }
      }
    }
    curBoard = [...newBoard.map((block) => [...block])].concat();
    if (count === 0) break;
  }

  const allBoards = newBoard.reduce((acc, cur) => acc.concat(cur));
  return allBoards.filter((block) => block === '').length;
}

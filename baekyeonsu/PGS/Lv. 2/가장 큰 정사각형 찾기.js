function solution(board) {
  let width = 0;
  let [row, col] = [board.length, board[0].length];

  if (row <= 1 || col <= 1) return 1;

  for (let x = 1; x < row; x++) {
    for (let y = 1; y < col; y++) {
      if (board[x][y] === 1) {
        const minNum = Math.min(
          board[x - 1][y],
          board[x][y - 1],
          board[x - 1][y - 1]
        );
        board[x][y] = minNum + 1;
        width = Math.max(width, board[x][y]);
      }
    }
  }
  return width * width;
}

function solution(places) {
  return places.map((place) => {
    let board = [];
    for (let x = 0; x < 5; x++) {
      board.push([]);
      for (let y = 0; y < 5; y++) {
        board[x].push(0);
      }
    }

    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        if (place[x][y] === 'P') {
          board[x][y] -= 1;
          if (x + 1 < 5) board[x + 1][y] -= 1;
          if (y + 1 < 5) board[x][y + 1] -= 1;
          if (x - 1 >= 0) board[x - 1][y] -= 1;
          if (y - 1 >= 0) board[x][y - 1] -= 1;
        }
        if (place[x][y] === 'X') {
          board[x][y] += 3;
        }
      }
    }

    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        if (board[x][y] <= -2) return 0;
      }
    }

    return 1;
  });
}

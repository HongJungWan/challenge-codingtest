function solution(grid) {
  const direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  function createBoard(grid) {
    return grid.map((x) =>
      [...x].map(() => {
        return new Array(4).fill(true);
      })
    );
  }

  function recordRoute(xi, yi, ri) {
    let total = 0;

    while (true) {
      if (!board[xi][yi][ri]) break;
      board[xi][yi][ri] = false;
      total += 1;

      xi += direction[ri][0];
      yi += direction[ri][1];

      if (xi < 0) xi = board.length - 1;
      if (xi >= board.length) xi = 0;
      if (yi < 0) yi = board[0].length - 1;
      if (yi >= board[0].length) yi = 0;

      if (grid[xi][yi] === 'R') ri = [3, 0, 1, 2][ri];
      if (grid[xi][yi] === 'L') ri = [1, 2, 3, 0][ri];
    }

    return total;
  }

  const totalList = [];
  const board = createBoard(grid);
  board.forEach((x, xi) => {
    x.forEach((y, yi) => {
      y.forEach((route, ri) => {
        if (route) {
          totalList.push(recordRoute(xi, yi, ri));
        }
      });
    });
  });

  return totalList.sort((a, b) => a - b);
}

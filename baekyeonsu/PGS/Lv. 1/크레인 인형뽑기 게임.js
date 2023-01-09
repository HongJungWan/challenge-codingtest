function solution(board, moves) {
  let cart = [];
  let answer = 0;

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        if (cart[cart.length - 1] === board[i][move - 1]) {
          answer += 2;
          cart.pop();
        } else cart.push(board[i][move - 1]);
        board[i][move - 1] = 0;
        break;
      }
    }
  });

  return answer;
}

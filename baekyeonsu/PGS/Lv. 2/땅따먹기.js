function solution(land) {
  let score = 0;
  for (let y = 1; y < land.length; y++) {
    for (let x = 0; x < 4; x++) {
      let tmp = land[y - 1][x];
      land[y - 1][x] = -1;
      land[y][x] += Math.max(...land[y - 1]);
      land[y - 1][x] = tmp;
    }
    score = Math.max(...land[y]);
  }
  return score;
}

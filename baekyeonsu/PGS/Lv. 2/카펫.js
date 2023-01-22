function solution(brown, yellow) {
  const area = brown + yellow;
  let answer = [0, 0];

  for (let x = parseInt(area / 2, 10); x > 2; x--) {
    if (area % x === 0 && (x - 2) * (area / x - 2) === yellow) {
      answer[0] = x;
      answer[1] = area / x;
    }
  }

  return answer.sort((a, b) => b - a);
}

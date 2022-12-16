function solution(k, m, score) {
  score.sort((a, b) => {
    return b - a;
  });
  let answer = 0;
  for (let i = m - 1; i < score.length; i += m) {
    if (score[i] > k) answer += k * m;
    else answer += score[i] * m;
  }
  return answer;
}

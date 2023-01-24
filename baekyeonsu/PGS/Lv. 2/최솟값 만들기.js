function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  const answer = A.reduce((total, a, i) => {
    return (total += a * B[i]);
  }, 0);
  return answer;
}

function solution(a, b, n) {
  let answer = 0;
  let current = n;

  while (current >= a) {
    answer += parseInt(current / a, 10) * b;
    current = parseInt(current / a, 10) * b + parseInt(current % a, 10);
  }

  return answer;
}

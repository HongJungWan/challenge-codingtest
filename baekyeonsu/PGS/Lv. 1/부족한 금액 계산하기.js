function solution(price, money, count) {
  let total = 0;
  let answer = 0;
  for (let current = 1; current <= count; current++) {
    total += price * current;
    if (total > money) {
      answer = total - money;
    }
  }
  return answer;
}

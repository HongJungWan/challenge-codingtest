function solution(n) {
  const ternary = [];

  while (n > 0) {
    if (n % 3 === 0) {
      ternary.push(4);
      n = Math.floor(n / 3) - 1;
    } else {
      ternary.push(n % 3);
      n = Math.floor(n / 3);
    }
  }
  return ternary.reverse().join('');
}

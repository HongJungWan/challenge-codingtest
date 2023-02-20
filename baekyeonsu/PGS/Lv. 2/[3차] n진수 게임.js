function solution(n, t, m, p) {
  const numbers = [];
  let number = 0;

  while (numbers.length < t * m) {
    const nDigit = [...number.toString(n)];
    numbers.push(...nDigit);
    number += 1;
  }

  return numbers
    .filter((number, turn) => turn + 1 <= t * m && (turn + 1 + (m - p)) % m === 0)
    .map((number) => number.toUpperCase())
    .join('');
}

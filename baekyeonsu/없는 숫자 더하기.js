function solution(numbers) {
  const total = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const totalSum = total.reduce((a, b) => a + b);
  const sum = numbers.reduce((a, b) => a + b);
  return totalSum - sum;
}

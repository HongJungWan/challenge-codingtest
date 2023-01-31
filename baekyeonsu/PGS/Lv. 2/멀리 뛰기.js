function solution(n) {
  if (n <= 2) return n;

  let result = new Array(n + 1);
  result[0] = 0;
  result[1] = 1;
  result[2] = 2;

  for (let i = 3; i <= n; i++) {
    result[i] = (result[i - 1] + result[i - 2]) % 1234567;
  }

  return result[n];
}

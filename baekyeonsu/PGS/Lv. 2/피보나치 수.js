function solution(n) {
  let fibonacci = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      fibonacci[i] = i;
    } else {
      fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % 1234567;
    }
  }
  return fibonacci[n];
}

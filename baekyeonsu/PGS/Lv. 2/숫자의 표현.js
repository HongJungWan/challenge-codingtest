function solution(n) {
  let count = 0;

  for (let num = 1; num <= n / 2 + 1; num++) {
    let sum = (num * (num + 1)) / 2;

    if (n - sum < 0) break;
    if ((n - sum) % num === 0) count += 1;
  }

  return count;
}

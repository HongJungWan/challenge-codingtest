function solution(n, m, section) {
  let count = 0;
  for (let num = 1; num <= n; num++) {
    if (section.includes(num)) {
      count += 1;
      num += m - 1;
    }
  }
  return count;
}

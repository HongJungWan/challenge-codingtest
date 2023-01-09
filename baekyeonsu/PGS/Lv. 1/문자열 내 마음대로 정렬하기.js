function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a >= b) return 1;
    if (a < b) return -1;
  });
  return strings;
}

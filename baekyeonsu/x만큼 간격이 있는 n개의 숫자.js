function solution(x, n) {
  let array = new Array(n);
  for (let i = 0; i < n; i++) {
    array[i] = x * (i + 1);
  }
  return array;
}

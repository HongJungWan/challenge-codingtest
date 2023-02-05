function solution(n, left, right) {
  let array = [];

  for (let i = 0; i < right - left + 1; i++) {
    array.push(Math.max((i + left) % n, parseInt((i + left) / n, 10)) + 1);
  }

  return array;
}

function solution(n) {
  const squareRoot = Math.sqrt(n);
  if (squareRoot === parseInt(squareRoot, 10)) {
    return Math.pow(squareRoot + 1, 2);
  }
  return -1;
}

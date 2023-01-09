function solution(n) {
  for (let x = 1; x <= n; x++) {
    if (n % x === 1) {
      console.log(x);
      return x;
    }
  }
}

solution(10);
solution(12);

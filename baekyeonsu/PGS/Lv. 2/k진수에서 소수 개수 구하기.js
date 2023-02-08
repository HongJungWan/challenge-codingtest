function solution(n, k) {
  let primeNumber = '0';
  let count = 0;

  n.toString(k)
    .split('')
    .forEach((num, i) => {
      if (num === '0') {
        if (isPrime(primeNumber)) {
          count += 1;
        }
        primeNumber = '0';
      } else {
        primeNumber += num;
      }
    });
  if (primeNumber.length > 0 && isPrime(primeNumber)) {
    count += 1;
  }

  return count;
}

function isPrime(n) {
  const number = parseInt(n, 10);
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

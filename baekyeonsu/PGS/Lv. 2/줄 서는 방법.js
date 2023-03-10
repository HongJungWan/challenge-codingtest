function solution(n, k) {
  const answer = [];
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  for (let i = 1; i <= n; i++) {
    let factorial = 1;
    for (let i = 1; i < numbers.length; i++) {
      factorial *= i;
    }

    const index = Math.ceil(k / factorial) - 1;
    const number = numbers[index];
    k -= index * factorial;

    numbers.splice(numbers.indexOf(number), 1);
    answer.push(number);
  }

  return answer;
}

function solution(k, tangerine) {
  const numbers = new Array(10000001).fill(0);

  tangerine.forEach((num) => {
    numbers[num] += 1;
  });

  numbers.sort((a, b) => {
    return b - a;
  });

  let total = 0;
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
    if (numbers[i] !== 0) {
      result += 1;
    }
    if (total >= k) {
      return result;
    }
  }
}

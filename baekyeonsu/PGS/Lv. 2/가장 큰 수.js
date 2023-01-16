function solution(numbers) {
  numbers.sort((a, b) => {
    for (let i = 0; i < 4; i++) {
      if (
        parseInt(a.toString() + b.toString(), 10) >
        parseInt(b.toString() + a.toString(), 10)
      ) {
        return -1;
      }
    }
  });

  if ([...new Set(numbers)].join('') === '0') return '0';
  return numbers.map((number) => number.toString()).join('');
}

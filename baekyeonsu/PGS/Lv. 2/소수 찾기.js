function solution(numbers) {
  const combinations = [];
  let count = 0;

  getPermutation([...numbers], '');
  [...new Set(combinations)].forEach((number) => {
    if (isPrime(number)) count += 1;
  });

  function getPermutation(list, fixedValue) {
    if (list.length >= 1) {
      for (let i = 0; i < list.length; i++) {
        const newFixedValue = fixedValue + list[i];
        const copyList = list.slice();
        copyList.splice(i, 1);
        combinations.push(parseInt(newFixedValue, 10));
        getPermutation(copyList, newFixedValue);
      }
    }
  }

  function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  return count;
}

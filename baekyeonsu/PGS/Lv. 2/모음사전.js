function solution(word) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  return [...word].reduce((total, alphabet, i) => {
    return (total += vowels.indexOf(alphabet) * sumSquare(4 - i) + 1);
  }, 0);

  function sumSquare(index) {
    let sum = 0;
    for (let i = index; i >= 0; i--) {
      sum += 5 ** i;
    }
    return sum;
  }
}

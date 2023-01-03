function solution(dartResult) {
  const squareList = {
    S: 1,
    D: 2,
    T: 3,
  };
  let numbers = [];
  let current = 0;

  [...dartResult].forEach((word, index) => {
    if (!isNaN(word)) {
      if (dartResult[index - 1] === '1') current = 10;
      else current = +word;
    }
    if (word in squareList) {
      numbers.push(Math.pow(current, squareList[word]));
    }

    if (word === '*') {
      numbers[numbers.length - 1] *= 2;
      numbers[numbers.length - 2] *= 2;
    }
    if (word === '#') numbers[numbers.length - 1] *= -1;
  });

  return numbers.reduce((prev, cur) => {
    return (prev += cur);
  }, 0);
}

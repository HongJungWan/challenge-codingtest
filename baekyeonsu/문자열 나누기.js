function solution(s) {
  let prev = '';
  let lastIndex = 0;
  let numbers = {
    same: 0,
    different: 0,
  };
  let result = 0;

  s.split('').forEach((word, index) => {
    if (prev === word) {
      numbers.same += 1;
    } else if (prev === '') {
      numbers.same += 1;
      prev = word;
    } else {
      numbers.different += 1;
    }

    if (numbers.same === numbers.different) {
      prev = '';
      numbers.same = 0;
      numbers.different = 0;
      result += 1;
      lastIndex = index;
    }
  });

  if (lastIndex !== s.length - 1 || s.length === 1) {
    result += 1;
  }

  return result;
}

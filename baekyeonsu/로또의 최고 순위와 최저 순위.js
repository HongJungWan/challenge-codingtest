function solution(lottos, win_nums) {
  const validations = lottos.filter((number) => {
    if (number !== 0) return number;
  });
  const unknownNumber = lottos.length - validations.length;
  let result = new Array(2).fill(6);

  if (unknownNumber === 6) {
    result[0] -= unknownNumber - 1;
    return result;
  }

  let same = 0;
  for (let i = 0; i < validations.length; i++) {
    if (win_nums.includes(validations[i])) {
      same += 1;
      if (same >= 2) {
        result[0] -= 1;
        result[1] -= 1;
      }
    }
  }

  if (unknownNumber + same >= 2) result[0] -= unknownNumber;
  return result;
}

function solution(number) {
  let answer = 0;

  const length = number.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        if (number[i] + number[j] + number[k] === 0) answer++;
      }
    }
  }

  return answer;
}

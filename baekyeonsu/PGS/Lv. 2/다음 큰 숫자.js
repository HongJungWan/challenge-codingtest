function solution(n) {
  const numberBinary = changeToBinary(n);

  let answer = n + 1;
  while (true) {
    const answerBinary = changeToBinary(answer);
    if (answerBinary === numberBinary) {
      return answer;
    }
    answer += 1;
  }
}

function changeToBinary(num) {
  return [...num.toString(2)].filter((num) => {
    return num === '1';
  }).length;
}

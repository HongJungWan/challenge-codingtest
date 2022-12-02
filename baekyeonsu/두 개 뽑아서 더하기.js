function solution(numbers) {
  const length = numbers.length;
  let array = [];

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      array.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(array)];
  answer.sort((a, b) => {
    return a - b;
  });

  return answer;
}

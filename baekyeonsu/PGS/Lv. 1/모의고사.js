function solution(answers) {
  const score = [
    getScore(answers, [1, 2, 3, 4, 5]),
    getScore(answers, [2, 1, 2, 3, 2, 4, 2, 5]),
    getScore(answers, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]),
  ];
  let answer = [];
  score.forEach((item, index) => {
    if (item === Math.max(...score)) {
      answer.push((index += 1));
    }
  });
  console.log(answer);
  return answer;
}

function getScore(answers, numbers) {
  let score = 0;
  for (let i = 0; i < answers.length; i++) {
    if (numbers[i % numbers.length] === answers[i]) score += 1;
  }
  return score;
}

solution([1, 2, 3, 4, 5]);
solution([1, 3, 2, 4, 2]);
solution([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);
solution([5, 5, 4, 2, 3]);
solution([3, 3, 2, 1, 5]);

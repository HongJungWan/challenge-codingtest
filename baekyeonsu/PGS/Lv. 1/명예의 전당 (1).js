function solution(k, score) {
  let ranking = [];
  let result = [];

  score.forEach((num) => {
    if (ranking.length < k) {
      ranking.push(num);
    } else if (ranking[ranking.length - 1] < num) {
      ranking[ranking.length - 1] = num;
    }
    ranking.sort((a, b) => b - a);
    result.push(ranking[ranking.length - 1]);
  });

  return result;
}

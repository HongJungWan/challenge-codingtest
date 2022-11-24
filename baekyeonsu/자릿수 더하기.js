function solution(n) {
  const numbers = n.toString().split("");
  const answer = numbers.reduce((prev, cur) => {
    const number = parseInt(cur, 10);
    return (prev += number);
  }, 0);

  console.log(answer);

  return answer;
}

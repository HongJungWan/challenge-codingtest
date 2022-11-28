function solution(arr, divisor) {
  const answer = arr.filter((number) => {
    return number % divisor === 0;
  });
  if (answer.length === 0) {
    answer.push(-1);
  }
  console.log(answer.sort((a, b) => a - b));
  return answer.sort((a, b) => a - b);
}

solution([5, 9, 7, 10], 5);
solution([2, 36, 1, 3], 1);
solution([3, 2, 6], 10);

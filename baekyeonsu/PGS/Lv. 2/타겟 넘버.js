function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);
  return answer;

  function dfs(n, sum) {
    if (n === numbers.length) {
      if (sum === target) answer += 1;
      return;
    }
    dfs(n + 1, sum + numbers[n]);
    dfs(n + 1, sum - numbers[n]);
  }
}

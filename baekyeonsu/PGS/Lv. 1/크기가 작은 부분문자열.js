function solution(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    if (parseInt(t.slice(i, i + p.length), 10) <= parseInt(p, 10)) answer += 1;
  }

  return answer;
}

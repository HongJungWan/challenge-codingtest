function solution(s) {
  let answer = new Array(s.length).fill(-1);
  for (let i = 1; i < s.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (s[j] === s[i]) {
        answer[i] = i - j;
        break;
      }
    }
  }
  return answer;
}

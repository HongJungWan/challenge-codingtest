function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? (count += 1) : (count -= 1);

    if (count < 0) {
      break;
    }
  }

  return count === 0;
}

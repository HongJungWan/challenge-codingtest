function solution(s) {
  const stack = [];

  if (s.length % 2 !== 0) return 0;

  [...s].forEach((word) => {
    if (stack[stack.length - 1] === word) {
      stack.pop();
    } else {
      stack.push(word);
    }
  });

  if (stack.length === 0) return 1;
  return 0;
}

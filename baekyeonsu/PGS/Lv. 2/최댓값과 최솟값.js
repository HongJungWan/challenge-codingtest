function solution(s) {
  const numbers = s.split(" ").map((num) => parseInt(num, 10));
  return [Math.min(...numbers), Math.max(...numbers)].join(" ");
}

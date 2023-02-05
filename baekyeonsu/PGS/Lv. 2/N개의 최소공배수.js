function solution(arr) {
  let lcm = 1;
  while (true) {
    const numbers = arr.filter((num) => lcm % num === 0);
    if (numbers.length === arr.length) break;
    lcm += 1;
  }
  return lcm;
}

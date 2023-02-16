function solution(k, d) {
  let count = 0;

  for (let x = 0; x <= d; x += k) {
    const maxY = Math.sqrt(d * d - x * x);
    count += Math.ceil(maxY / k);
    if (maxY % k === 0) count += 1;
  }

  return count;
}

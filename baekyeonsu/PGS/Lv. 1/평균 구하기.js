function solution(arr) {
  const sum = arr.reduce((prev, cur) => {
    return (prev += cur);
  }, 0);
  const svg = sum / arr.length;
  return svg;
}

function solution(d, budget) {
  let total = d.reduce((sum, value) => {
    return (sum += value);
  }, 0);
  while (total > budget) {
    const maxValue = Math.max(...d);
    total -= maxValue;
    d.splice(d.indexOf(maxValue), 1);
  }
  return d.length;
}

function solution(elements) {
  const sumList = [];

  for (let len = 1; len <= elements.length; len++) {
    const sumItems = [];
    for (let i = 0; i < elements.length; i++) {
      let sum;
      if (i <= elements.length - len) {
        sum = elements.slice(i, i + len);
      } else {
        sum = elements
          .slice(0, len - elements.length + i)
          .concat(elements.slice(i, i + elements.length - 1));
      }
      sumItems.push(sum.reduce((a, b) => (a += b)));
    }
    sumList.push(...sumItems);
  }
  return [...new Set(sumList)].length;
}

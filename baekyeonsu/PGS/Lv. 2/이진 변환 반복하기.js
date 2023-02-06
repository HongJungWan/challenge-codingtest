function solution(s) {
  let numbers = s;
  let [conversionCount, removedCount] = [0, 0];
  while (numbers != 1) {
    const removed = [...numbers].filter((num) => num == 1);
    removedCount += numbers.length - removed.length;
    conversionCount += 1;
    numbers = removed.length.toString(2);
  }
  return [conversionCount, removedCount];
}

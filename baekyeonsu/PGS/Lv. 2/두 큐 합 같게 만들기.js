function solution(queue1, queue2) {
  let [sum1, sum2] = [sum(queue1), sum(queue2)];
  const halfSum = (sum1 + sum2) / 2;
  const queue = queue1.concat(queue2);
  let [pos1, pos2] = [0, queue1.length];

  for (let count = 0; count < queue1.length * 3; count++) {
    if (sum1 === halfSum) return count;

    if (sum1 > halfSum) {
      sum1 -= queue[pos1 % queue.length];
      pos1 += 1;
    } else {
      sum1 += queue[pos2 % queue.length];
      pos2 += 1;
    }
  }

  return -1;

  function sum(queue) {
    return queue.reduce((acc, cur) => acc + cur, 0);
  }
}

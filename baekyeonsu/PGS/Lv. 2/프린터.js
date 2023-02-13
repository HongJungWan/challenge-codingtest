function solution(priorities, location) {
  const list = [];
  let answer = 0;
  let max = Math.max(...priorities);

  for (let i = 0; i < priorities.length; i++) {
    list.push(i);
  }

  while (priorities.length !== 0) {
    if (priorities[0] < max) {
      priorities.push(priorities.shift());
      list.push(list.shift());
    } else {
      answer += 1;
      priorities.shift();
      if (list.shift() === location) {
        return answer;
      }
      max = Math.max(...priorities);
    }
  }
}

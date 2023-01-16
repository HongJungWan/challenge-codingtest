function solution(progresses, speeds) {
  const endDay = [];
  progresses.forEach((progress, i) => {
    let day = 1;
    while (true) {
      if (day >= (100 - progress) / speeds[i]) {
        endDay.push(day);
        break;
      }
      day += 1;
    }
  });

  const result = [];
  let biggest = 0;
  for (let i = 0; i < endDay.length; i++) {
    if (result.length === 0) {
      result.push(1);
      biggest = endDay[i];
    } else if (biggest >= endDay[i]) {
      result[result.length - 1] += 1;
    } else {
      biggest = endDay[i];
      result.push(1);
    }
  }

  return result;
}

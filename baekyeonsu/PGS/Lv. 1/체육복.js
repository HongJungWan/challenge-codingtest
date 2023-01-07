function solution(n, lost, reserve) {
  let answer = n;
  let remainingList = reserve
    .filter((item) => {
      if (!lost.includes(item)) return item;
    })
    .sort();
  let lostList = lost
    .filter((item) => {
      if (!reserve.includes(item)) return item;
    })
    .sort();
  for (let i = 0; i < lostList.length; i++) {
    if (remainingList.includes(lostList[i] - 1)) {
      remainingList.splice(remainingList.indexOf(lostList[i] - 1), 1);
    } else if (remainingList.includes(lostList[i] + 1)) {
      remainingList.splice(remainingList.indexOf(lostList[i] + 1), 1);
    } else answer -= 1;
  }
  return answer;
}

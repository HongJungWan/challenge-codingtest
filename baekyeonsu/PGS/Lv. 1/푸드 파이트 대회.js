function solution(food) {
  let halfList = [];
  for (let i = 0; i < food.length; i++) {
    const length = parseInt(food[i] / 2, 10);
    if (length < 1) continue;

    for (let j = 0; j < length; j++) {
      halfList.push(i);
    }
  }
  const sortList = [...halfList].sort((a, b) => {
    return b - a;
  });
  return halfList.concat(0, sortList).join("");
}

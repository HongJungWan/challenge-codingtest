function solution(order) {
  const container = [];
  let item = 1;
  let numberOfItem = 0;

  for (const index of order) {
    let addState = false;
    while (true) {
      if (container.length === 0) {
        container.push(item);
        item += 1;
      }
      if (index > container.at(-1)) {
        container.push(item);
        item += 1;
      } else if (index === container.at(-1)) {
        container.pop();
        numberOfItem += 1;
        addState = true;
        break;
      } else break;
    }
    if (!addState) break;
  }
  return numberOfItem;
}

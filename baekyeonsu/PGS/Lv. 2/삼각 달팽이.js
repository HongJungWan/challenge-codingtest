function solution(n) {
  let stack = [];
  let totalNumber = 0;
  for (let i = 1; i <= n; i++) {
    stack.push(new Array(i).fill(0));
    totalNumber += i;
  }

  let [x, y] = [0, 0];
  let [dicX, dicY] = [1, 0];
  for (let num = 1; num <= totalNumber; num++) {
    stack[x][y] = num;

    if (
      dicX === 1 &&
      dicY === 0 &&
      (x + dicX === n || stack[x + dicX][y] !== 0)
    ) {
      [dicX, dicY] = [0, 1];
    }
    if (
      dicY === 1 &&
      dicX === 0 &&
      (y + dicY === n || stack[x][y + dicY] !== 0)
    ) {
      [dicX, dicY] = [-1, -1];
    }
    if (
      dicX === -1 &&
      dicY === -1 &&
      (x + dicX === -1 || stack[x + dicX][y + dicY] !== 0)
    ) {
      [dicX, dicY] = [1, 0];
    }
    x += dicX;
    y += dicY;
  }

  return stack.reduce((acc, cur) => acc.concat(cur), []);
}

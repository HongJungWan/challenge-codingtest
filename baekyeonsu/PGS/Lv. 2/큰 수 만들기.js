function solution(number, k) {
  let stack = [];
  let reverseNum = number.split('').reverse();
  let count = 0;
  let removed = 0;

  while (count < k && reverseNum.length > 0) {
    stack.push(reverseNum.pop());

    while (stack.at(-1) < reverseNum.at(-1) && count < k) {
      stack.pop();
      count += 1;
    }
  }

  if (count === 0) stack.pop();
  return stack.concat(reverseNum.reverse()).join('');
}

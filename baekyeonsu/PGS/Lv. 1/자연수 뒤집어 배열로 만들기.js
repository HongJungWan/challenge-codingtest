function solution(n) {
  const numberList = n.toString().split("");
  const numbers = numberList.map((number) => {
    return parseInt(number, 10);
  });
  const reverseNumbers = numbers.reverse();
  return reverseNumbers;
}

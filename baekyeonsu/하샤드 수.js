function solution(x) {
  const array = x.toString().split("");
  const sum = array.reduce((total, number) => {
    return (total += parseInt(number, 10));
  }, 0);
  if (x % sum === 0) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
}

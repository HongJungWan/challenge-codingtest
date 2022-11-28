function solution(absolutes, signs) {
  const length = absolutes.length;
  let sum = 0;
  for (let i = 0; i < length; i++) {
    if (signs[i]) sum += absolutes[i];
    else sum -= absolutes[i];
  }
  return sum;
}

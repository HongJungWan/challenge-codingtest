function solution(s) {
  const array = s.split("");
  array.sort(function (a, b) {
    if (a > b) return -1;
    else if (b > a) return 1;
    else return 0;
  });
  console.log(array.join(""));
  return array.join("");
}

solution("Zbcdefg");

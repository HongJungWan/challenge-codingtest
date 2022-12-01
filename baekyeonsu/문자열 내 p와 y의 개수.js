function solution(s) {
  const numbers = { p: 0, y: 0 };
  const array = s.split("");
  array.forEach((alphabet) => {
    if (alphabet === "p" || alphabet === "P") {
      numbers.p += 1;
    }
    if (alphabet === "y" || alphabet === "Y") {
      numbers.y += 1;
    }
  });

  if (numbers.p === numbers.y) {
    console.log(`'p'의 개수 ${numbers.p}개, 'y'의 개수 ${numbers.y}개로 같으므로 true를 return 합니다.`);
    return true;
  }
  console.log(`'p'의 개수 ${numbers.p}개, 'y'의 개수 ${numbers.y}개로 다르므로 false를 return 합니다.`);
  return false;
}

solution("pPoooyY");
solution("Pyy");

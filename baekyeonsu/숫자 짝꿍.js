// 시간초과
// function solution(X, Y) {
//   let answer = [];
//   let comparedNumber = Y.split('');

//   for (let i = 0; i < X.length; i++) {
//     const number = X[i];
//     if (comparedNumber.includes(number)) {
//       answer.push(number);
//       comparedNumber.splice(comparedNumber.indexOf(number), 1);
//     }
//     if (comparedNumber.length === 0) break;
//   }

//   if (answer.length === 0) return '-1';

//   if (parseInt(answer, 10) === 0) return '0';

//   return answer
//     .sort((a, b) => b - a)
//     .join('')
//     .toString();
// }

function solution(X, Y) {
  let answer = '';
  let numberX = new Array(10).fill(0);
  let numberY = new Array(10).fill(0);

  X.split('').forEach((x) => {
    numberX[x] += 1;
  });

  Y.split('').forEach((y) => {
    numberY[y] += 1;
  });

  for (let i = 9; i >= 0; i--) {
    if (numberX[i] > 0 && numberY[i] > 0)
      answer += i
        .toString()
        .repeat(numberX[i] < numberY[i] ? numberX[i] : numberY[i]);
  }

  if (answer === '') answer = '-1';
  if (parseInt(answer, 10) === 0) answer = '0';

  return answer;
}

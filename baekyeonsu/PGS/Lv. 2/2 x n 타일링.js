function solution(n) {
  if (n <= 2) return n * 2;

  let result = new Array(n + 1);
  result[0] = 0;
  result[1] = 1;
  result[2] = 2;

  for (let i = 3; i <= n; i++) {
    result[i] = (result[i - 1] + result[i - 2]) % 1000000007;
  }

  return result[n];
}

// 오버플로우
// function solution(n) {
//   let count = 0;
//   let [width, height] = [0, n];

//   while (width <= n) {
//     count += combination(width, height);
//     width += 2;
//     height -= 2;
//   }

//   return count;

//   function combination(width, height) {
//     let n, r;
//     if (width < height) {
//       n = height;
//       r = width / 2;
//     } else {
//       n = width + 1;
//       r = height;
//     }
//     return (factorial(n) / (factorial(r) * factorial(n - r))) % 1000000007;
//   }

//   function factorial(num) {
//     let result = 1;
//     if (num < 1) return result;
//     for (let i = 1; i <= num; i++) {
//       result %= 1000000007;
//       result *= i;
//     }
//     return result;
//   }
// }

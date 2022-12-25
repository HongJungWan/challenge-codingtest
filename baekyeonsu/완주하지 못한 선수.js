// 시간 초과
// function solution(participant, completion) {
//   let numbers = [];

//   for (let i = 0; i < participant.length; i++) {
//     numbers.push(participant[i]);
//   }

//   for (let i = 0; i < completion.length; i++) {
//     if (numbers.includes(completion[i])) {
//       numbers.splice(numbers.indexOf(completion[i]), 1);
//     }
//   }

//   console.log(numbers.join(""));
//   return numbers.join("");
// }

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < completion.length; i++) {
    if (completion[i] !== participant[i]) return participant[i];
  }
  return participant[participant.length - 1];
}

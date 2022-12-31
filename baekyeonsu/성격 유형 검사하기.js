function solution(survey, choices) {
  const score = [0, 3, 2, 1, 0, 1, 2, 3];
  let table = [
    { name: 'R', score: 0 },
    { name: 'T', score: 0 },
    { name: 'C', score: 0 },
    { name: 'F', score: 0 },
    { name: 'J', score: 0 },
    { name: 'M', score: 0 },
    { name: 'A', score: 0 },
    { name: 'N', score: 0 },
  ];
  let answer = '';

  survey.forEach((question, index) => {
    const tableIndex = (i) => table.findIndex((v) => v.name === question[i]);
    if (choices[index] < 4) table[tableIndex(0)].score += score[choices[index]];
    if (choices[index] > 4) table[tableIndex(1)].score += score[choices[index]];
  });

  const setList = [
    ['R', 'T'],
    ['C', 'F'],
    ['J', 'M'],
    ['A', 'N'],
  ];

  setList.forEach((set) => {
    const item = (i) => table.find((v) => v.name === set[i]).score;
    if (item(0) < item(1)) answer += set[1];
    else if (item(0) === item(1)) {
      if (set[0] < set[1]) answer += set[0];
      else answer += set[1];
    } else answer += set[0];
  });

  return answer;
}

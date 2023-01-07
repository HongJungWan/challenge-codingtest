function solution(n, a, b) {
  let participant = [];
  for (let i = 1; i <= n; i++) {
    participant.push(i);
  }
  let round = 1;
  let competition = [];
  while (round <= 20) {
    competition = [];
    for (let i = 0; i < participant.length - 1; i += 2) {
      if (
        (participant[i] === a && participant[i + 1] === b) ||
        (participant[i] === b && participant[i + 1] === a)
      ) {
        return round;
      }
      competition.push([participant[i], participant[i + 1]]);
    }
    participant = competition.map((person) => {
      if (person[0] === a || person[0] === b) return person[0];
      return person[1];
    });
    round += 1;
  }
  return round;
}

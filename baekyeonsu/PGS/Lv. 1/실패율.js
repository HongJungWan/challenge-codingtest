function solution(N, stages) {
  const failedCount = new Array(N + 1).fill(0);
  stages.forEach((stage) => (failedCount[stage - 1] += 1));
  let players = stages.length;
  const failTuples = [];
  for (let i = 0; i < N + 1; i++) {
    const stage = i + 1;
    if (stage === N + 1) continue;
    const count = failedCount[i];
    failTuples.push([stage, count / players]);
    players -= count;
  }
  return failTuples
    .sort((tupleA, tupleB) => tupleB[1] - tupleA[1])
    .map((tuple) => tuple[0]);
}

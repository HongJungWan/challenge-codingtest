function solution(s) {
  const tuples = s
    .slice(2, s.length - 2)
    .split('},{')
    .map((tuple) => tuple.split(',').map((num) => +num))
    .sort((a, b) => a.length - b.length);

  const result = [];
  tuples.forEach((tuple) => {
    for (let i = 0; i < tuple.length; i++) {
      if (!result.includes(tuple[i])) {
        result.push(tuple[i]);
        break;
      }
    }
  });

  return result;
}

function solution(n, words) {
  let [person, turn] = [0, 0];

  for (let i = 1; i < words.length; i++) {
    console.log(words.slice(0, i - 1));
    if (
      words.slice(0, i - 1).includes(words[i]) ||
      words[i][0] !== words[i - 1][words[i - 1].length - 1]
    ) {
      person = parseInt(i % n, 10) + 1;
      turn = parseInt(i / n, 10) + 1;
      return [person, turn];
    }
  }

  return [person, turn];
}

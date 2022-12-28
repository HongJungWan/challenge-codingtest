function solution(babbling) {
  const speakingList = ['aya', 'ye', 'woo', 'ma'];
  let answer = 0;

  babbling.forEach((words) => {
    let array = '';
    let current = '';

    let i = 0;
    while (i < words.length) {
      if (words[i] === 'a' || words[i] === 'w') {
        if (
          speakingList.includes(words.slice(i, i + 3)) &&
          words.slice(i, i + 3) !== current
        ) {
          current = words.slice(i, i + 3);
          i += 3;
        } else break;
      } else if (words[i] === 'y' || words[i] === 'm') {
        if (
          speakingList.includes(words.slice(i, i + 2)) &&
          words.slice(i, i + 2) !== current
        ) {
          current = words.slice(i, i + 2);
          i += 2;
        } else break;
      } else break;

      array += current;
    }

    if (array === words) answer++;
  });

  return answer;
}

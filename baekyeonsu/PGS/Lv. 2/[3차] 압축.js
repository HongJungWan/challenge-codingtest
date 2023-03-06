function solution(msg) {
  const dictionary = [];
  const indexes = [];
  let addedWords = [];

  for (let alphabet = 0; alphabet < 26; alphabet++) {
    dictionary.push(String.fromCharCode(65 + alphabet));
  }

  for (let i = 0; i < msg.length; i++) {
    addedWords.push(msg[i]);

    if (!dictionary.includes(addedWords.join(''))) {
      dictionary.push(addedWords.join(''));
      addedWords.pop();
      indexes.push(dictionary.indexOf(addedWords.join('')) + 1);
      addedWords = [];
      i -= 1;
    }
  }

  indexes.push(dictionary.indexOf(addedWords.join('')) + 1);
  return indexes;
}

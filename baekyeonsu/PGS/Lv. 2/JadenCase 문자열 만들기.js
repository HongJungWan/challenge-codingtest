function solution(s) {
  return s
    .split(' ')
    .map((word) => {
      if (/[0-9]/.test(word[0])) return word.toLowerCase();
      return word.slice(0, 1).toUpperCase() + word.slice(1, word.length).toLowerCase();
    })
    .join(' ');
}

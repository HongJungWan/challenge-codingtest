function solution(s, n) {
  const newArr = s.split('').map((word) => {
    if (word === ' ') return word;
    const answer = checkCode(word.charCodeAt(0), n);
    return String.fromCharCode(answer);
  });
  return newArr.join('');
}

function checkCode(word, n) {
  const code = word + n;
  if (word <= 'Z'.charCodeAt(0) && code > 'Z'.charCodeAt(0)) return code - 'Z'.charCodeAt(0) + 'A'.charCodeAt(0) - 1;
  if (word >= 'a'.charCodeAt(0) && word <= 'z'.charCodeAt(0) && code > 'z'.charCodeAt(0)) return code - 'z'.charCodeAt(0) + 'a'.charCodeAt(0) - 1;
  return code;
}

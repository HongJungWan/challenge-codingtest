function solution(p) {
  if (p.length === 0) return p;
  let result;

  separateBrackets([...p]);

  function separateBrackets(array) {
    let u = [];
    let count = 0;
    let balanced = true;
    let v = [];
    array.forEach((bracket, i) => {
      if (i === 0 && bracket === ')') balanced = false;
      if (u.length === 0 || count !== 0) {
        u.push(bracket);
        bracket === '(' ? count++ : count--;
      } else {
        v.push(bracket);
      }
    });

    if (balanced) {
      result = u.join('');
      result += solution(v);
    } else {
      result = '(';
      result += solution(v);
      result += ')';
      u.shift();
      u.pop();
      if (u.length !== 0) {
        result += u
          .map((bracket) => {
            if (bracket === '(') return ')';
            return '(';
          })
          .join('');
      }
    }
  }
  return result;
}

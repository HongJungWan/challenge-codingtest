function solution(s) {
  let brackets = [...s];
  let stack = [];
  let result = 0;

  for (let x = 0; x < s.length; x++) {
    for (let i = 0; i < s.length; i++) {
      if (brackets[i] === "(" || brackets[i] === "{" || brackets[i] === "[") {
        stack.push(brackets[i]);
        continue;
      }

      const pair = [stack[stack.length - 1], brackets[i]].join("");
      if (pair === "()" || pair === "{}" || pair === "[]") {
        stack.pop();
      } else if (stack.length === 0) {
        result -= 1;
        break;
      } else {
        break;
      }
    }
    if (stack.length === 0) {
      result += 1;
    }

    brackets.push(brackets[0]);
    brackets.splice(0, 1);
  }

  return result;
}

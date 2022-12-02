function solution(array, commands) {
  const answer = commands.map((command) => {
    const newArray = array.slice(command[0] - 1, command[1]);
    newArray.sort((a, b) => {
      return a - b;
    });
    return newArray[command[2] - 1];
  });
  return answer;
}

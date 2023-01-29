function solution(skill, skill_trees) {
  let answer = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    const list = [...skill];
    for (let j = 0; j < skill_trees[i].length; j++) {
      const item = skill_trees[i][j];
      if (!skill.includes(item)) continue;
      if (list[0] === item) list.shift();
      else {
        answer -= 1;
        break;
      }
    }
    answer += 1;
  }
  return answer;
}

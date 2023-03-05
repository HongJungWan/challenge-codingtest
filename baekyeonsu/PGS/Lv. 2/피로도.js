function solution(k, dungeons) {
  let answer = 0;

  dfs(k, dungeons, 0);

  function dfs(k, dungeons, prev) {
    dungeons.forEach((dungeon, i) => {
      if (dungeon[0] > 0 && k >= dungeon[0]) {
        const newDungeons = [...dungeons].map((newDungeon) => [...newDungeon]);
        newDungeons[i] = [0, 0];
        dfs(k - dungeon[1], newDungeons, prev + 1);
      }
    });
    return (answer = Math.max(prev, answer));
  }

  return answer;
}

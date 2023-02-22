function solution(dirs) {
  const trackingList = new Set();
  const dirList = ['U', 'D', 'R', 'L'];
  const direction = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 },
  ];

  let [posX, posY] = [5, 5];
  [...dirs].forEach((dir) => {
    if (posX >= 0 && posX <= 10 && posY >= 0 && posY <= 10) {
      const dirIndex = dirList.indexOf(dir);
      const tracking = getTracking(posX, posY, dirIndex);
      if (tracking !== 0) {
        trackingList.add(tracking);
        posX += direction[dirIndex].x;
        posY += direction[dirIndex].y;
      }
    }
  });

  function getTracking(x, y, i) {
    const [nextX, nextY] = [x + direction[i].x, y + direction[i].y];
    if (nextX >= 0 && nextX <= 10 && nextY >= 0 && nextY <= 10)
      return [
        [x, y],
        [nextX, nextY],
      ]
        .sort()
        .reduce((acc, cur) => acc.concat(cur))
        .join('');
    return 0;
  }

  return trackingList.size;
}

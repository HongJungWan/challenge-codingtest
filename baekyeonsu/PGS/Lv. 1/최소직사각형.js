function solution(sizes) {
  let widthList = [];
  let heightList = [];
  sizes.map((card, index) => {
    widthList[index] = Math.max(...card);
    heightList[index] = Math.min(...card);
  });

  const width = Math.max(...widthList);
  const height = Math.max(...heightList);

  return width * height;
}

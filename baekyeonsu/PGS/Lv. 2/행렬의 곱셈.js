function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push([]);
    for (let j = 0; j < arr2[0].length; j++) {
      result[i].push(0);
    }
  }
  arr1.forEach((x, xi) => {
    x.forEach((y, yi) => {
      for (let i = 0; i < arr2[0].length; i++) {
        result[xi][i] += arr1[xi][yi] * arr2[yi][i];
      }
    });
  });
  return result;
}

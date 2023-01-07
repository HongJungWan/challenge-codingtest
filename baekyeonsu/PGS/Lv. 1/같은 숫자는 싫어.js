function solution(arr) {
  let newArray = [];

  arr.forEach((item) => {
    if (item !== newArray[newArray.length - 1]) {
      newArray.push(item);
    }
  });

  console.log(newArray);
  return newArray;
}

solution([1, 1, 3, 3, 0, 1, 1]);
solution([4, 4, 4, 3, 3]);

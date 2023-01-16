function solution(str1, str2) {
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < str1.length - 1; i++) {
    if (str1[i + 1].toLowerCase() < "a" || str1[i + 1].toLowerCase > "z") {
      i++;
    } else if (str1[i].toLowerCase() >= "a" && str1[i].toLowerCase() <= "z") {
      arr1.push(str1[i].toLowerCase() + str1[i + 1].toLowerCase());
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    if (str2[i + 1].toLowerCase() < "a" || str2[i + 1].toLowerCase > "z") {
      i++;
    } else if (str2[i].toLowerCase() >= "a" && str2[i].toLowerCase() <= "z") {
      arr2.push(str2[i].toLowerCase() + str2[i + 1].toLowerCase());
    }
  }

  const intersection = [];
  [...arr1].forEach((arr) => {
    if (arr2.includes(arr)) {
      intersection.push(arr);
      arr2.splice(arr2.indexOf(arr), 1);
      arr1.splice(0, 1);
    }
  });
  const union = [...intersection].concat([...arr1], [...arr2]);

  if (union.length === 0) {
    return 65536;
  }
  return Math.floor((intersection.length / union.length) * 65536);
}

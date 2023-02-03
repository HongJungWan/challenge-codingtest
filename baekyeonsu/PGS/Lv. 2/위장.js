function solution(clothes) {
  const types = [];
  const names = [];

  clothes.forEach(([name, type]) => {
    if (types.includes(type)) {
      names[types.indexOf(type)].push(name);
    } else {
      types.push(type);
      names.push([name]);
    }
  });

  const count = names.reduce((total, name) => {
    return (total *= name.length + 1);
  }, 1);
  return count - 1;
}

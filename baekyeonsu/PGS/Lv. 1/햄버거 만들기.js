function solution(ingredient) {
  let result = 0;
  let burgerList = [];

  ingredient.forEach((item) => {
    burgerList.push(item);

    let burger = burgerList.slice(burgerList.length - 4, burgerList.length);
    if (burger.join("") === "1231") {
      result += 1;
      burgerList.splice(burgerList.length - 4, 4);
    }
  });

  return result;
}

function solution(topping) {
  const [toppingA, toppingB] = [new Set(), new Set()];
  const [numberA, numberB] = [[], []];

  topping.forEach((item, cutting) => {
    toppingA.add(item);
    if (cutting !== 0) toppingB.add(topping.at(-cutting));
    numberA.push(toppingA.size);
    numberB.push(toppingB.size);
  });

  return numberA.reduce((sum, num, i) => {
    return num === numberB.at(-i - 1) ? (sum += 1) : sum;
  }, 0);
}

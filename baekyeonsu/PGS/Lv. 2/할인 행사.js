function solution(want, number, discount) {
  let days = 0;

  let wantList = [];
  want.forEach((item, i) => {
    for (let num = 0; num < number[i]; num++) {
      wantList.push(item);
    }
  });

  for (let i = 0; i <= discount.length - 10; i++) {
    let cart = [...wantList];
    if (cart.includes(discount[i])) {
      for (let j = i; j < i + 10; j++) {
        if (!cart.includes(discount[j])) {
          break;
        }
        cart.splice(cart.indexOf(discount[j]), 1);
      }
      if (cart.length === 0) {
        days += 1;
      }
    }
  }

  return days;
}

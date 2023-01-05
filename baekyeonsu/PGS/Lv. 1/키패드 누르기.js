function solution(numbers, hand) {
  const NUM_POSITION = [
    [1, 0],
    [0, 3],
    [1, 3],
    [2, 3],
    [0, 2],
    [1, 2],
    [2, 2],
    [0, 1],
    [1, 1],
    [2, 1],
  ];
  let hands = {
    left: [0, 0],
    right: [2, 0],
  };
  let result = [];

  numbers.forEach((num) => {
    const leftDistance = getDistance(NUM_POSITION[num], hands.left);
    const rightDistance = getDistance(NUM_POSITION[num], hands.right);

    if (NUM_POSITION[num][0] === 0) moveLeftHand(num);
    else if (NUM_POSITION[num][0] === 2) moveRightHand(num);
    else {
      if (leftDistance < rightDistance) moveLeftHand(num);
      else if (leftDistance > rightDistance) moveRightHand(num);
      else {
        if (hand === "right") moveRightHand(num);
        else moveLeftHand(num);
      }
    }
  });

  return result.join("");

  function getDistance(standard, compared) {
    return Math.abs(standard[0] - compared[0], 2) + Math.abs(standard[1] - compared[1], 2);
  }

  function moveLeftHand(num) {
    result.push("L");
    hands.left = NUM_POSITION[num];
  }

  function moveRightHand(num) {
    result.push("R");
    hands.right = NUM_POSITION[num];
  }
}

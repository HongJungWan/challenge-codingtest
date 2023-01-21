function solution(people, limit) {
  people.sort((a, b) => b - a);
  let start = 0;
  let end = people.length - 1;
  let boat = people.length;

  while (start <= end) {
    if (people[start] + people[end] > limit || start === end) {
      start += 1;
    } else {
      start += 1;
      end -= 1;
      boat -= 1;
    }
  }

  return boat;
}

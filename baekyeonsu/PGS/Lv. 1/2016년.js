function solution(a, b) {
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayOfWeek = week.indexOf("FRI");

  let date = 0;
  for (let i = 0; i < a - 1; i++) {
    date += month[i];
  }
  date += b;

  let index = dayOfWeek + (date % 7) - 1;
  if (index >= 7) {
    index -= 7;
  }
  console.log(week[index]);
  return week[index];
}

solution(5, 24);

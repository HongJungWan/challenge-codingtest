function solution(book_time) {
  book_time.sort();
  const endList = [];

  book_time.forEach((time) => {
    const [start, end] = [time[0].split(':'), time[1].split(':')];
    const startTime = Number(start[0]) * 60 + Number(start[1]);
    const endTime = Number(end[0]) * 60 + Number(end[1]) + 10;

    const endIndex = endList.findIndex((time) => time <= startTime);
    if (endIndex === -1) endList.push(endTime);
    else endList[endIndex] = endTime;
  });

  return endList.length;
}

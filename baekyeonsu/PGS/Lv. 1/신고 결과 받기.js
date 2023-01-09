function solution(id_list, report, k) {
  let userList = [];

  id_list.forEach((id) => {
    userList.push({ name: id, report: [], number: 0 });
  });

  [...new Set(report)].forEach((item) => {
    const user = item.split(' ');
    const index = (name) => userList.findIndex((obj) => obj.name == name);

    userList[index(user[0])].report.push(userList[index(user[1])]);
    userList[index(user[1])].number += 1;
  });

  const stoppedUser = userList.filter((user) => {
    return user.number >= k;
  });

  let result = new Array(userList.length).fill(0);
  userList.forEach((user, index) => {
    stoppedUser.forEach((stop) => {
      if (user.report.includes(stop)) {
        result[index] += 1;
      }
    });
  });

  return result;
}

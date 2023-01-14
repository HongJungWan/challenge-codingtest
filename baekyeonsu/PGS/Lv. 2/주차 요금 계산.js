function solution(fees, records) {
  const parkingList = [];
  const totalTimeList = [];

  records.forEach((record) => {
    const info = record.split(' ');
    const minutes = (time) => {
      const timeArray = time.split(':');
      const hour = parseInt(timeArray[0], 10);
      const minute = parseInt(timeArray[1], 10);
      return hour * 60 + minute;
    };
    const parking = {
      time: minutes(info[0]),
      number: info[1],
      state: info[2],
    };

    if (parking.state === 'IN') {
      parkingList.push(parking);
    } else {
      const currentCar =
        parkingList[
          parkingList.findIndex((car) => car.number === parking.number)
        ];
      const parkingTime = parking.time - currentCar.time;

      const totalTimeInfo = {
        number: parking.number,
        time: parkingTime,
      };
      if (totalTimeList.some((car) => car.number === totalTimeInfo.number)) {
        const currentInfo =
          totalTimeList[
            totalTimeList.findIndex(
              (car) => car.number === totalTimeInfo.number
            )
          ];
        currentInfo.time += totalTimeInfo.time;
      } else {
        totalTimeList.push(totalTimeInfo);
      }
      parkingList.splice(parkingList.indexOf(currentCar), 1);
    }
  });
  parkingList.forEach((parking) => {
    const time = 23 * 60 + 59 - parking.time;
    if (totalTimeList.some((car) => car.number === parking.number)) {
      totalTimeList[
        totalTimeList.findIndex((car) => car.number === parking.number)
      ].time += time;
    } else {
      const totalTimeInfo = {
        number: parking.number,
        time: time,
      };
      totalTimeList.push(totalTimeInfo);
    }
  });

  const getPrice = (time) => {
    const feeInfo = fees.map((fee) => parseInt(fee, 10));
    if (time <= feeInfo[0]) {
      return feeInfo[1];
    }
    return (
      feeInfo[1] + Math.ceil((time - feeInfo[0]) / feeInfo[2]) * feeInfo[3]
    );
  };

  const feeList = totalTimeList
    .sort((a, b) => {
      return parseInt(a.number, 10) - parseInt(b.number, 10);
    })
    .map((info) => {
      return getPrice(info.time);
    });

  return feeList;
}

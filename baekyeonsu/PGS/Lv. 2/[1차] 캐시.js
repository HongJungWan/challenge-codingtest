function solution(cacheSize, cities) {
  let cache = [];
  let time = 0;

  cities.forEach((city) => {
    city = city.toLowerCase();
    if (cache.includes(city)) {
      cache.splice(cache.indexOf(city), 1);
      time += 1;
    } else {
      time += 5;
    }
    cache.push(city);
    if (cache.length > cacheSize) {
      cache.shift();
    }
  });

  return time;
}

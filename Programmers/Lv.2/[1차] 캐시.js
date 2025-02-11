function solution(cacheSize, cities) {
  const MISS = 5,
    HIT = 1;

  let cache = [],
    time = 0;

  if (cacheSize === 0) return cities.length * MISS;

  for (let city of cities) {
    city = city.toLowerCase();

    if (cache.find((c) => c === city)) {
      cache = cache.filter((c) => c !== city);
      cache.push(city);
      time += HIT;
    } else {
      if (cache.length >= cacheSize) cache.shift();
      cache.push(city);
      time += MISS;
    }
  }

  return time;
}

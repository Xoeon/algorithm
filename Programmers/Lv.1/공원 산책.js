function solution(park, routes) {
  let [x, y] = [0, 0];

  const h = park.length;
  const w = park[0].length;

  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === 'S') [x, y] = [i, j];
    }
  }

  routes.map((route) => {
    const [direction, distance] = route.split(' ');
    let [dx, dy] = [0, 0];

    if (direction === 'E') dy = 1;
    else if (direction === 'W') dy = -1;
    else if (direction === 'S') dx = 1;
    else dx = -1;

    let canMove = true;

    for (let i = 1; i <= distance; i++) {
      const a = x + dx * i;
      const b = y + dy * i;

      if (a >= 0 && a < h && b >= 0 && b < w && park[a][b] !== 'X') continue;
      else {
        canMove = false;
        break;
      }
    }

    if (canMove) {
      x += dx * distance;
      y += dy * distance;
    }
  });

  return [x, y];
}

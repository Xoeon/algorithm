function solution(park, routes) {
  let [x, y] = [0, 0];
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === 'S') [x, y] = [i, j];
    }
  }

  function move(direction) {
    if (direction === 'E') x++;
    else if (direction === 'W') x--;
    else if (direction === 'N') y++;
    else y--;
  }

  routes.map((route) => {
    const [d, n] = route.split(' ');
  });
}

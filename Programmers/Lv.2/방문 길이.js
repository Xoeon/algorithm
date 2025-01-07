function solution(dirs) {
  let x = 0;
  let y = 0;
  let positions = new Set();

  for (dir of dirs) {
    let dx = 0;
    let dy = 0;

    if (dir === 'R') {
      dx = 1;
    } else if (dir === 'L') {
      dx = -1;
    } else if (dir === 'U') {
      dy = 1;
    } else {
      dy = -1;
    }

    if (Math.abs(x + dx) <= 5 && Math.abs(y + dy) <= 5) {
      let now = x + '' + y;
      let position = '';
      let reverse = '';

      x += dx;
      y += dy;

      position = now + x + '' + y;
      reverse = x + '' + y + now;

      if (positions.has(position) || positions.has(reverse)) {
        continue;
      } else {
        positions.add(position);
      }
    } else {
      continue;
    }
  }

  return positions.size;
}

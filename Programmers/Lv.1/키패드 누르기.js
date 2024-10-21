const keypad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['*', 0, '#'],
];

function getIndex(target) {
  for (let i = 0; i < keypad.length; i++) {
    let innerIdx = keypad[i].indexOf(target);
    if (innerIdx !== -1) {
      return [i, innerIdx];
    }
  }
  return -1;
}

function getDistance(x, y) {
  const xIdx = getIndex(x);
  const yIdx = getIndex(y);

  return Math.abs(xIdx[0] - yIdx[0]) + Math.abs(xIdx[1] - yIdx[1]);
}

function solution(numbers, hand) {
  let left = '*';
  let right = '#';
  const result = [];

  const leftSide = new Set([1, 4, 7]);
  const rightSide = new Set([3, 6, 9]);

  function handleRight(num) {
    right = num;
    result.push('R');
  }

  function handleLeft(num) {
    left = num;
    result.push('L');
  }

  for (let number of numbers) {
    const leftDistance = getDistance(left, number);
    const rightDistance = getDistance(right, number);

    if (leftSide.has(number)) {
      handleLeft(number);
    } else if (rightSide.has(number)) {
      handleRight(number);
    } else {
      if (leftDistance > rightDistance) {
        handleRight(number);
      } else if (leftDistance < rightDistance) {
        handleLeft(number);
      } else {
        hand === 'left' ? handleLeft(number) : handleRight(number);
      }
    }
  }

  return result.join('');
}

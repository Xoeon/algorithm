const keypad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['*', 0, '#'],
];

let left = '*';
let right = '#';

const result = [];

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

function handleRight(num) {
  right = num;
  result.push('R');
}

function handleLeft(num) {
  left = num;
  result.push('L');
}

function solution(numbers, hand) {
  for (let number of numbers) {
    const leftDistance = getDistance(left, number);
    const rightDistance = getDistance(right, number);

    if (number === 1 || number === 4 || number === 7) {
      handleLeft(number);
    } else if (number === 3 || number === 6 || number === 9) {
      handleRight(number);
    } else {
      if (leftDistance > rightDistance) handleRight(number);
      else if (leftDistance < rightDistance) handleLeft(number);
      else {
        hand === 'left' ? handleLeft(number) : handleRight(number);
      }
    }
  }

  return result.join('');
}

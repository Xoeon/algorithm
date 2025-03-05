function solution1(order) {
  const cb = [];
  for (let i = 1; i <= order.length; i++) cb.push(i);

  let count = 0;
  const stack = [];
  for (let num of order) {
    while (cb.length > 0 && cb[0] !== num && stack[stack.length - 1] !== num) {
      stack.push(cb.shift());
    }

    if (cb[0] === num) {
      cb.shift();
      count++;
      continue;
    } else if (stack[stack.length - 1] === num) {
      stack.pop();
      count++;
      continue;
    } else {
      return count;
    }
  }

  return count;
}

function solution2(order) {
  let count = 0;
  let index = 0;
  let stack = [];

  for (let box = 1; box <= order.length; box++) {
    stack.push(box);

    while (stack.length > 0 && stack[stack.length - 1] === order[index]) {
      stack.pop();
      index++;
      count++;
    }
  }

  return count;
}

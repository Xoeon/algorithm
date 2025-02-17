function solution(toppings) {
  let left = new Set();
  let right = new Map();
  let count = 0;

  for (let topping of toppings) {
    right.set(topping, (right.get(topping) || 0) + 1);
  }

  for (let i = 0; i < toppings.length; i++) {
    left.add(toppings[i]);
    right.set(toppings[i], right.get(toppings[i]) - 1);

    if (right.get(toppings[i]) === 0) right.delete(toppings[i]);

    if (right.size === left.size) count++;
  }

  return count;
}

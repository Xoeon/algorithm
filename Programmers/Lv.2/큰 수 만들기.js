function solution(number, k) {
  const stack = [];
  for (let digit of number) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] < digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  return stack.slice(0, stack.length - k).join("");
}

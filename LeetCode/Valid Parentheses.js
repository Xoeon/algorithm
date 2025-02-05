/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack1 = [];
  const stack2 = [];
  const stack3 = [];

  s.split('').forEach((bracket) => {
    switch (bracket) {
      case '(':
        stack1.push(bracket);
      case ')':
        if (stack1.length === 0 || stack1[stack1.length - 1] !== '(') {
          return false;
        } else stack1.pop();
        break;
      case '{':
        stack2.push(bracket);
      case '}':
        if (stack2.length === 0 || stack2[stack2.length - 1] !== '{') {
          return false;
        } else stack2.pop();
        break;
      case '[':
        stack3.push(bracket);
      case ']':
        if (stack3.length === 0 || stack3[stack3.length - 1] !== '[') {
          return false;
        } else stack3.pop();
        break;
      default:
        console.log('default');
    }
  });

  return true;
};

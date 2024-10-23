function solution(today, terms, privacies) {
  const ans = [];
  const obj = {};

  for (let term of terms) {
    const [type, num] = term.split(' ');
    obj[type] = +num;
  }

  const todayDate = new Date(today);

  for (let i = 0; i < privacies.length; i++) {
    const [date, term] = privacies[i].split(' ');
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + obj[term]);

    if (newDate <= todayDate) {
      ans.push(i + 1);
    }
  }

  return ans;
}

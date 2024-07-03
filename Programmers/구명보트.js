const solution = (people, limit) => {
  people.sort((a, b) => b - a);

  for (let i = 0; i < people.length; i++) {
    for (let j = people.length - 1; j > i; j--) {
      if (people[i] + people[j] <= limit) {
        const index = j;
        if (index > -1 && index < people.length) {
          people.splice(index, 1);
        }
        break;
      }
    }
  }

  return people.length;
};

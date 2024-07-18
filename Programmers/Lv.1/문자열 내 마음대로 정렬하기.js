const solution = (strings, n) => {
  strings.sort((a, b) => {
    if (a.charCodeAt(n) === b.charCodeAt(n)) {
      return a.localeCompare(b);
    } else {
      return a.charCodeAt(n) - b.charCodeAt(n);
    }
  });

  return strings;
};

const solution = (s, skip, index) => {
  let skipIdx = [...skip].map((char) => char.charCodeAt(0));

  let sIdx = [...s].map((char) => {
    let charIdx = char.charCodeAt(0);
    let count = 0;

    while (count !== index) {
      if (charIdx + 1 > 122) {
        charIdx -= 25;
      } else {
        charIdx++;
      }

      if (!skipIdx.includes(charIdx)) count++;
    }

    return charIdx;
  });

  return sIdx.map((char) => String.fromCharCode(char)).join("");
};

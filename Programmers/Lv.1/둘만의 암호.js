const solution = (s, skip, index) => {
  let skipIdx = [...skip].map((char) => char.charCodeAt(0));

  let sIdx = [...s].map((char) => {
    let charIdx = char.charCodeAt(0);
    let count = 0;

    while (count !== index) {
      charIdx++;
      if (!skipIdx.includes(charIdx)) count++;
    }

    return charIdx > 122 ? charIdx - 26 : charIdx;
  });

  return sIdx.map((char) => String.fromCharCode(char)).join("");
};

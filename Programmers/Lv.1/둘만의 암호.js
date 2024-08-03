const solution = (s, skip, index) => {
  let skipIdx = [...skip].map((char) => char.charCodeAt(0));

  let sIdx = [...s].map((char) => {
    let charIdx = char.charCodeAt(0);

    for (let count = 0; count < index; ) {
      charIdx++;
      charIdx = ((charIdx - 97) % 26) + 97;

      if (!skipIdx.includes(charIdx)) count++;
    }

    return charIdx;
  });

  return sIdx.map((char) => String.fromCharCode(char)).join("");
};

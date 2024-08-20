let array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];

const count = new Array(Math.max(...array) + 1).fill(0);

for (let i = 0; i < array.length; i++) {
  count[array[i]]++;
}

for (let i = 0; i < count.length; i++) {
  console.log((String(i) + ' ').repeat(count[i]));
}

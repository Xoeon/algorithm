function solution(book_time) {
  const timeToMin = (time) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  const books = book_time.map(([start, end]) => [
    timeToMin(start),
    timeToMin(end) + 10,
  ]);
  books.sort((a, b) => a[0] - b[0]);

  const rooms = [];
  for (let [start, end] of books) {
    rooms.sort((a, b) => a - b);
    if (rooms.length && rooms[0] <= start) {
      rooms.shift();
    }
    rooms.push(end);
  }

  return rooms.length;
}

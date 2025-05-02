function normalize(melody) {
  return melody
    .replace(/C#/g, "c")
    .replace(/D#/g, "d")
    .replace(/E#/g, "e")
    .replace(/F#/g, "f")
    .replace(/G#/g, "g")
    .replace(/A#/g, "a")
    .replace(/B#/g, "b");
}
// E, B는 조건에 없는데 이거 안 넣으면 테케 34 틀림.

function getTime(start, end) {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);

  return eh * 60 + em - (sh * 60 + sm);
}

function solution(m, musicinfos) {
  const normalizedM = normalize(m);
  const candidates = [];

  musicinfos.forEach((info, index) => {
    const [start, end, title, melody] = info.split(",");
    const playTime = getTime(start, end);
    const normalizedMelody = normalize(melody);

    const fullMelody = normalizedMelody
      .repeat(Math.ceil(playTime / normalizedMelody.length))
      .slice(0, playTime);

    if (fullMelody.includes(normalizedM)) {
      candidates.push({ title, playTime, index });
    }
  });

  if (candidates.length === 0) return "(None)";

  candidates.sort((a, b) =>
    b.playTime !== a.playTime ? b.playTime - a.playTime : a.index - b.index
  );

  return candidates[0].title;
}

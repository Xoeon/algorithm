function solution(records) {
  const idMap = new Map();
  const messageMap = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  const output = [];

  for (let record of records) {
    const [status, id, nickname] = record.split(' ');

    if (nickname) idMap.set(id, nickname);
    if (status !== 'Change') output.push([id, status]);
  }

  return output.map(([id, status]) => `${idMap.get(id)}${messageMap[status]}`);
}

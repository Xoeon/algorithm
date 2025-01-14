function solution(priorities, location) {
  const queue = priorities.map((priority, idx) => [priority, idx]);
  let maxPriority = Math.max(...priorities);
  let order = 0;

  while (queue.length > 0) {
    const currentTask = queue.shift();

    if (currentTask[0] === maxPriority) {
      order++;
      if (currentTask[1] === location) {
        return order;
      }

      maxPriority = Math.max(...queue.map((task) => task[0]), 0);
    } else {
      queue.push(currentTask);
    }
  }
}

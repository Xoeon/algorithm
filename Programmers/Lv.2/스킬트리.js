/* <indexOf 메서드를 이용하는 방식>
 * 문자열의 순서가 꺠졌을 경우 indexOf는 -1을 반환하는 것을 이용
 */
function solution1(skill, skill_trees) {
  let count = 0;

  for (let skill_tree of skill_trees) {
    const filtered = skill_tree
      .split('')
      .filter((char) => skill.includes(char))
      .join('');

    if (skill.indexOf(filtered) === 0) count++;
  }

  return count;
}

/* <Set을 이용하여 시간 복잡도를 줄인 버전>
 * filter method(O(N)) 대신 set을 사용하면 O(1)로 시간 복잡도 줄일 수 있음.
 * 처음 접근 시 includes가 아니라 startsWith 메서드를 사용했다면 순서를 유지할 수 있었을 것
 */
function solution2(skill, skill_trees) {
  let count = 0;
  const skillSet = new Set(skill);

  for (let skill_tree of skill_trees) {
    let skillOrder = [];

    for (let char of skill_tree) {
      if (skillSet.has(char)) skillOrder.push(char);
    }

    if (skill.startsWith(skillOrder.join(''))) count++;
  }

  return count;
}

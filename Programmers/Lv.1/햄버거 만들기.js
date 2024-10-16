function solution(ingredients) {
  const stack = []; // 재료를 쌓아둘 스택
  let count = 0; // 만들어진 햄버거의 개수

  for (let num of ingredients) {
    // 재료를 순회하며
    stack.push(num); // 순서대로 재료를 넣는다.

    const len = stack.length; // stack의 length를 계속해서 계산하는 것을 방지
    if (
      len >= 4 && // 최소한 스택에 4개는 쌓였을 때 비교
      stack[len - 1] === 1 &&
      stack[len - 2] === 3 &&
      stack[len - 3] === 2 &&
      stack[len - 4] === 1 // 마지막 4개의 재료가 1-2-3-1일 경우
    ) {
      stack.splice(-4); // 마지막 4개를 pop한다.
      count++; // 햄버거의 개수 +1
    }
  }

  return count;
}

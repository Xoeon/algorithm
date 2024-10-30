function solution(n, words) {
  // 음.. 일단 중복이 되면 안되니깐..
  // hash = { tank: 1 } 뭐 이런 식으로 저장해서
  // if (hash[tank]) 어쩌고저쩌고 이렇게 하면 O(1)인가?
  // 배열로 접근하면 find 메서드 써야하잖아 그럼 최악의 경우에 O(n ^ 2) 아님?
  // 일단 최악의 상황으로 먼저 접근해보자.

  const arr = [];
  const len = words.length;

  let stop = false;
  let i = 0;

  while (!stop && i < len) {
    const is_exist = arr.find((word) => word === words[i]); // 단어가 중복될 경우
    const last_word = arr[arr.length - 1];
    let is_wrong = last_word
      ? last_word[last_word.length - 1] !== words[i][0]
        ? true
        : false
      : false;

    if (arr[arr.length - 1]) {
      is_wrong =
        arr[arr.length - 1].split('').pop() !== words[i][0] ? true : false;
    }

    if (is_exist || is_wrong) {
      stop = true;
      break;
    } else {
      arr.push(words[i]);
    }

    i++;
  }

  return words[i]
    ? [(i + 1) % n === 0 ? n : (i + 1) % n, Math.ceil((i + 1) / n)]
    : [0, 0];
}

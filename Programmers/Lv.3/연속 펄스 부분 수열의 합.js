function solution(sequence) {
  // [1, -1, 1, ...]
  let max1 = 0,
    curr1 = 0;
  // [-1, 1, -1, ...]
  let max2 = 0,
    curr2 = 0;

  for (let i = 0; i < sequence.length; i++) {
    const val1 = (i % 2 === 0 ? 1 : -1) * sequence[i];
    const val2 = -val1;

    // Kardane Algorithm
    curr1 = Math.max(val1, curr1 + val1);
    max1 = Math.max(max1, curr1);

    curr2 = Math.max(val2, curr2 + val2);
    max2 = Math.max(max2, curr2);
  }

  return Math.max(max1, max2);
}

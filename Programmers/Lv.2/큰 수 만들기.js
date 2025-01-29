function solution(number, k) {
  let ans = "";
  let slicedNum = number;

  while (k > 0) {
    console.log("k:", k);
    const maxIdx = slicedNum.indexOf(Math.max(...slicedNum.slice(0, k + 1)));
    console.log("slicedNum.slice(0, k + 1):", slicedNum.slice(0, k + 1));
    console.log("Max Index:", maxIdx, ", Max Num:", slicedNum[maxIdx]);

    ans += slicedNum[maxIdx];
    console.log(ans);
    slicedNum = slicedNum.slice(maxIdx + 1);
    console.log(slicedNum);
    k--;

    console.log("------------");
  }

  return ans;
}

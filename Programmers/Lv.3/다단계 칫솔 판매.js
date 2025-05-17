function solution(enroll, referral, seller, amount) {
  const PRICE = 100;
  const PERCENT = 0.1;
  const ROOT = "center";

  const parent = { [ROOT]: null };
  const earnings = {};

  // parent, earnings 초기화
  for (let i = 0; i < enroll.length; i++) {
    parent[enroll[i]] = referral[i] === "-" ? ROOT : referral[i];
    earnings[enroll[i]] = 0;
  }

  // 판매 수익 분배
  for (let i = 0; i < seller.length; i++) {
    let vendor = seller[i];
    let profit = amount[i] * PRICE;

    while (vendor !== ROOT && profit > 0) {
      const commission = Math.floor(profit * PERCENT);
      earnings[vendor] += profit - commission;
      vendor = parent[vendor];
      profit = commission;
    }
  }

  return enroll.map((name) => earnings[name]);
}

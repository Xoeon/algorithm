function solution(enroll, referral, seller, amount) {
  const PRICE = 100;

  const parent = { center: null };
  for (let i = 0; i < referral.length; i++) {
    parent[enroll[i]] = referral[i] === "-" ? "center" : referral[i];
  }

  const sum = {};
  const splitMoney = (vendor, money) => {
    if (vendor === "center" || money <= 0) return;

    const p = parent[vendor];
    const pm = Math.floor(money * 0.1);
    sum[vendor] = (sum[vendor] || 0) + (money - pm);
    splitMoney(p, pm);
  };

  for (let i = 0; i < seller.length; i++) {
    splitMoney(seller[i], amount[i] * PRICE);
  }

  return enroll.map((v) => (sum[v] ? sum[v] : 0));
}

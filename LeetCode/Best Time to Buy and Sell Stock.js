/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity;
  let max = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    max = Math.max(max, price - minPrice);
  }

  return max;
};

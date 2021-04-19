// 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。

// 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

// 返回获得利润的最大值。

// 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

// 示例 1:

// 输入: prices = [1, 3, 2, 8, 4, 9], fee = 2
// 输出: 8
// 解释: 能够达到的最大利润:  
// 在此处买入 prices[0] = 1
// 在此处卖出 prices[3] = 8
// 在此处买入 prices[4] = 4
// 在此处卖出 prices[5] = 9
// 总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
// 注意:

// 0 < prices.length <= 50000.
// 0 < prices[i] < 50000.
// 0 <= fee < 50000.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  // 参考官方题解，动态规划，由于每天只有持有股票和不持有股票，所以可以设定
  // dp[i][0]表示第i没有股票的最大利润，do[i][1]表示第i填有股票的最大利润
  // 则dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i] - fee)
  // dp[i][1] = max(dp[i-1][1], dp[i-1][0]-prices[i])
  // 初始状态：dp[0][0] = 0, dp[0][1] = -prices[0]
  // 由于dp[i] 只由dp[i-1] 确定，可以用两个变量表示
  let sell = 0, buy = -prices[0]
  console.log(sell, buy)
  for (let i = 1; i < prices.length; i++) {
    [sell, buy] = [Math.max(sell, buy + prices[i] - fee), Math.max(buy, sell - prices[i])]
  }
  return sell
};

const i = [1, 4, 2, 8, 4, 9]
// 1, 4, 4, 5, 4, 9
console.log(maxProfit(i, 2))


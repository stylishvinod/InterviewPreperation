//https://www.lintcode.com/problem/cutting-a-rod/description

const cutting = function (prices, n) {
    
    const dp = new Array(prices.length+1).fill(0).map(a => new Array(n+1).fill(0));
    
    for(let i = 1 ; i<= prices.length; i++) {
        for(let j = 1; j<= n; j++) {
            if(j < i) {
                dp[i][j] = dp[i-1][j]
            } else {
                dp[i][j] = Math.max(dp[i-1][j], prices[i-1] + dp[i][j-i]);
            }
        }
    }
    return dp[prices.length][n]
}

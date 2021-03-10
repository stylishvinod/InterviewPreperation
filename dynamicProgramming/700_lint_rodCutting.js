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


// Method:: 2
const cutting = function (prices, n) {
    
    const dp = new Array(n+1).fill(0);
    
    
    for(let i = 1 ; i<= n; i++) {
        for(let j = 0; j < prices.length; j++) {
            if(i >= (j+1)) {
                dp[i] = Math.max(dp[i], dp[i-(j+1)]+prices[j])
            } else { 
                break;
            }
        }
    }
    console.log({dp})
    return dp[n]
}
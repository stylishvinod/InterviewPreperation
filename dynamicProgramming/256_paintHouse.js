// https://leetcode.com/problems/paint-house/

/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    const len = costs.length;
    // dp. row: house, col: color
    
    const dp = new Array(len+1).fill(0).map(a => new Array(3).fill(0));
    
    // cols  0 - red, 1- blue, 2-green
    for(let i = 1; i <= len; i++) {
            dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + costs[i-1][0]
            dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + costs[i-1][1]
            dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + costs[i-1][2]
        }
    return Math.min(dp[len][0], dp[len][1], dp[len][2])
}
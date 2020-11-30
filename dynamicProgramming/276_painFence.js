
// https://leetcode.com/problems/paint-fence/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    if(n==0) return 0;
    if(n===1) return k;
    
    const dp = new Array(n+1).fill(0);
    dp[1] = k
    dp[2] = k*k
    
    for(let i = 3; i <=n; i++) {
        // same color as (i-1) then we need to look for (i-2) and color is different than i-2, so we wil have (i-2) * k-1 options
        // if we want to paint different color than i-1 then we will have (i-1) * (k-1) options
        dp[i] = (dp[i-1] + dp[i-2]) * (k-1)
    }
    
    return dp[n]
};
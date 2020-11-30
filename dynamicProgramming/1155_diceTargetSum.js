//https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/

/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
    
    let dp = new Array(d).fill(0).map(a => new Array(target+1).fill(0));
    let mod = Math.pow(10, 9) + 7;
    
    for(let j=1; j<= target; j++) {
        if(j <= f) {
            dp[0][j] = 1;
        }
    }
    
    for(let i = 1; i < d; i++) {
        for(let j = 1; j<=target; j++) {
            
            for(let k = 1; k<=f && k <=j; k++) {
                dp[i][j] = (dp[i][j] + dp[i-1][j-k]) % mod 
            }
        }
    }
    
    
    return dp[d-1][target]
};
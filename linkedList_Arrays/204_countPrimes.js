//204: https://leetcode.com/problems/count-primes/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n==0 || n ===1) return 0;
    let dp =  new Array(n).fill(true);
    dp[0] = false;
    dp[1] = false;
    
     for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if(dp[i]) {
            for(let j = 2; j *i < n; j++) {
                dp[j*i] = false
            }
        }
    }
    
    return dp.filter(val => val).length;
};
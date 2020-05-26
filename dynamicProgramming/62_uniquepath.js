
//62 https://leetcode.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    let dp = new Array(m).fill(0).map(a => new Array(n).fill(0));
    
    // fill first row, there is only '1' path possible
    for(let i = 0 ; i < n ; i++) {
        dp[0][i] = 1;
    }
    
    // fill first col with '1' since there is only 1 path possible
    for(let i = 0 ; i < m ; i++) {
        dp[i][0] = 1;
    }
    
    for(let i = 1; i < m; i++) {
        for(let j = 1; j<n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[m-1][n-1];
};
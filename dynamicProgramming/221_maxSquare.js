
// https://leetcode.com/problems/maximal-square/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(!matrix.length) return 0;
    let r = matrix.length;
    let c = matrix[0].length;
    let maxSq = Number.MIN_SAFE_INTEGER;
    
    //dp table of size r+1 and c+1. to gives flexibility to not to separately
    // handle the first row and col scenario
    
    let dp = new Array(r+1).fill(0).map(a => new Array(c+1).fill(0));
    
    for(let i = 1; i <=r; i++) {
        for(let j = 1; j<=c; j++) {
            // check if value in matrix is equal to '1';
            
            if(matrix[i-1][j-1] === '1') {
                dp[i][j] = 1 + Math.min(dp[i-1][j-1],
                    dp[i-1][j],
                    dp[i][j-1]
                );
                maxSq = Math.max(maxSq, dp[i][j])
                
            }
        }
    }
    return maxSq === Number.MIN_SAFE_INTEGER ? 0:  maxSq * maxSq;
};
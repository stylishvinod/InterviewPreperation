// https://leetcode.com/problems/longest-common-subsequence/
// ref: https://www.youtube.com/watch?v=LAKWWDX3sGw&t=545s
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let r = text1.length;
    let col = text2.length;
    
    let dp = new Array(r+1).fill(0).map(a => new Array(col+1).fill(0));
    
    for(let i = 1; i <= r; i++) {
        for(let j = 1; j <= col; j++) {
            // if both values are same, 1 + diagonal value
            if(text1[i-1] === text2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                // if they are not equal, max value of either top or left value
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    return dp[r][col];
};

// https://leetcode.com/problems/dungeon-game/submissions/

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    
    let m = dungeon.length;
    let n = dungeon[0].length;
    
    let dp = new Array(m).fill(0).map(a => new Array(n).fill(0));
    
    // start from bottom.
    // if any cell result is positive make it to zero, in that way
    // we can count -ve values correctly
    
    for(let i = m-1; i>=0; i--) {
        for(let j= n-1; j>=0; j--) {
            
            // lowest corner value
            if(i === m-1 && j === n-1) {
                dp[i][j] = Math.min(0, dungeon[i][j]);
            } else if(i === m-1) { // last row
                dp[i][j] = Math.min(0, dungeon[i][j]+dp[i][j+1])
            } else if( j === n-1) { // last column
                dp[i][j] = Math.min(0, dungeon[i][j]+dp[i+1][j])
            } else {
                dp[i][j] = Math.min(0, dungeon[i][j]+ Math.max(dp[i+1][j], dp[i][j+1]))
            }
        }
    }
    
    return Math.abs(dp[0][0]) + 1
};
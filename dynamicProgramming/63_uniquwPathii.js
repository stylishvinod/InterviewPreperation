//63 :: https://leetcode.com/problems/unique-paths-ii/


/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let row = obstacleGrid.length;
    let cols = obstacleGrid[0].length;
    let dp = new Array(row).fill(0).map(a => new Array(cols).fill(0));
    
    // fill the first row, if no obstucles there is 1 way
    let prevObs = false;
    for(let i = 0; i < cols; i++) {
        if(obstacleGrid[0][i] === 1) {
            prevObs = true;
        }
        dp[0][i] = prevObs ? 0 : 1;
    }
    
     // fill the first col, if no obstucles there is 1 way else 0
     prevObs = false;
    for(let i = 0; i < row; i++) {
        if(obstacleGrid[i][0] === 1) {
            prevObs = true;
        }
        dp[i][0] = prevObs ? 0 : 1;
    }
    
    for(let i = 1; i < row; i++) {
        for(let j = 1 ; j < cols ; j++) {
            if(obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i-1][j] + dp [i][j-1];
            }
        }
    }
    
    return dp[row-1][cols-1]
};
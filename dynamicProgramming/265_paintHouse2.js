
// https://leetcode.com/problems/paint-house-ii/

/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
    if(!costs.length) return 0;
    let m = costs.length;
    let n = costs[0].length;
    let dp = new Array(m).fill(0).map(a => new Array(n).fill(0));

    //base case 
    for(let i=0; i < n; i++) {
        dp[0][i] = costs[0][i]
    }
    
    // houses on row
    // cols on cols
    
    for(let i=1; i< m; i++) {
        for(let j=0; j<n; j++) {
            dp[i][j] = getMin(dp, i-1, j) + costs[i][j];
            
        }
    }
    
    return Math.min(...dp[m-1]);
};


const getMin = (dp, i, j) => {
    let min = Number.MAX_SAFE_INTEGER;
    for(let k =0; k < dp[0].length; k++) {
        if(k !== j) {
            min = Math.min(min, dp[i][k])
        }
    }
    return min;
}
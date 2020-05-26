// 983 https://leetcode.com/problems/minimum-cost-for-tickets/


/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    //move all days to set, so it is easy to find
    let set = new Set();
    for(let i = 0; i < days.length; i++) {
        set.add(days[i]);
    }

    // dp array length is last element in costs plus 1;
    let dp = new Array(days[days.length - 1] + 1);
    dp[0] = 0;
    
    for(let i = 1;i < dp.length;i++) {
        // value is equal to the previous day value if that is not present in the days list
        dp[i] = dp[i-1];
        if(set.has(i)) {
            dp[i] = Math.min(
                        dp[Math.max(0, i-1)] + costs[0],
                        dp[Math.max(0, i-7)] + costs[1],
                        dp[Math.max(0, i-30)] + costs[2],
                        );
              
        }
    }
    
    return dp[dp.length-1];
    
};


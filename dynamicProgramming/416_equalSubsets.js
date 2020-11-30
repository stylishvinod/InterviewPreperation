//416: https://leetcode.com/problems/partition-equal-subset-sum/


// using knapsack approach
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    let sum = 0 ;
    for(let i = 0 ; i < nums.length; i++) {
        sum += nums[i]
    }
    
    if(sum % 2 !== 0) return false;
    let half = sum /2 ;
    
    // rows  eqauls to total elements in input elements
    // cols is equal to sum value
    
    let dp = new Array(nums.length + 1).fill(false).map(a => new Array(half+1).fill(false));
    
    // first colum is true, because we can get zero sum by exculing all elements
    for(let i = 0 ; i <= nums.length; i++) {
        dp[i][0] = true;
    }
    
    // first row is false except(0,0) because with zero input subset, we can't get sum greter than zero
    
    for(let i = 1; i <= half; i++) {
        dp[0][i] = false
    }
    
    for(let i =1; i <=nums.length; i++) {
        for(let j = 1; j<= half; j++) {
            
            if( j < nums[i-1]) {
                dp[i][j] = dp[i-1][j]  // skip
            } else if(j >= nums[i-1]) {
                // either skip or choose
                dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]];
            }
            
        }
    }

    return dp[nums.length][half]
};


// using one one dimensional DP
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // we can solve this using DP appraoch
    // since getting all subsets and check the sum takes more time
    let sum = nums.reduce((num, total) => total += num, 0);
    
    // we can check if sum is divisible by two, we can divide the set into 
    // 2 parts elese no/
    
    if(sum %2 !== 0) return false;
    
    // create dp for half of sum, because if we are able to get half
    //automatically other half is possible
    let half = sum / 2;
    let dp = new Array(half+1).fill(false);
    dp[0] = true;
    
    //for each num value check how much sum is possible and if
    // dp[half] is true means we can separate to two parts
    for(let i = 0 ; i < nums.length; i++) {
        let num = nums[i];
        for(let j = half; j>= num; j--) {
            dp[j] = dp[j] || dp[j-num];
        }
    }
    
    return dp[half] || false;
    
};



// memoization

var canPartition = function(nums) {
    const memo = new Map();
    
    function permute(sum1, sum2=0, idx=0) {
        if(memo.has(`${sum1}-${sum2}`)) return memo.get(`${sum1}-${sum2}`);
        if(sum1 === sum2) return true;
        if(sum1 < nums[idx] || idx >= nums.length) return false;
        const val = permute(sum1-nums[idx], sum2+nums[idx], idx+1) || permute(sum1, sum2, idx+1)
        memo.set(`${sum1}-${sum2}`, val);
        return val;
    }
    const total = nums.reduce((acc, cur) => acc+cur, 0);
    return permute(total)
};
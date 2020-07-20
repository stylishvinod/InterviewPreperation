//https://leetcode.com/problems/largest-divisible-subset/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    if(nums.length < 2) return nums;
    let dp = new Array(nums.length). fill(1);
    let result = [];
    let max = 1;
    nums.sort((a,b) => a-b);
    for(let i = 1; i < nums.length; i++) {
        for(let j = 0 ; j < i; j++) {
            if((nums[i] % nums[j] === 0 ) && (dp[j] + 1  > dp[i])) {
               dp[i] = 1 +dp[j];
                if(max < dp[i]) {
                    max = dp[i]
                }
               }
         }
    }
    
    let prev = -1;
    console.log({dp})
    for(let i = nums.length - 1; i >= 0; i--) {
        if(dp[i] === max && (prev % nums[i]  === 0 || prev === -1)) {
            result.push(nums[i]);
            prev = nums[i];
            max--
        } 
    }
    
    return result;
};
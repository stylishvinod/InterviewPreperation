// 300: https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let len = nums.length;
    if(len === 0) return 0;
    if(len === 1) return 1;
    // initializing dp array with 1 because every element is longest element
    // to itself and its length is 1;
    let dp = new Array(len).fill(1);
    let max = 1;
    
    for(let i=1; i<len; i++) {
        for(let j=0; j < i; j++) {
            // everytime check if 'i'elementis grether than 'j' lement and
            // dp[j] should be greter than equal to dp[i]
            if(nums[i] > nums[j] && dp[i] <= dp[j]) {
                dp[i] = dp[j] + 1;
                max = Math.max(dp[i], max);
            }
        }
    }
    return max;
};
//53: https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length;
    if(!len) return 0;
    
    let totalMaxSum = nums[0];
    let currMaxSum = nums[0];
    
    for(let i= 1; i < len; i++) {
        currMaxSum = Math.max(nums[i], nums[i] + currMaxSum);
        totalMaxSum = Math.max(totalMaxSum, currMaxSum);
    }
    return totalMaxSum;
};
// 152: https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let len = nums.length;
    if(!len) return 0;
    
    let currMax = nums[0];
    let currMin = nums[0];
    let totalMax = nums[0];
    
    for(let i = 1; i< len; i++) {
        let tmp = currMax;
        currMax = Math.max(nums[i], currMax * nums[i], currMin * nums[i]);
        currMin = Math.min(nums[i], tmp * nums[i], currMin * nums[i]);
        
        if(currMax > totalMax) {
            totalMax = currMax;
        }

    }
    return totalMax;
    
    
};
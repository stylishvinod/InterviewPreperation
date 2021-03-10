

// https://leetcode.com/problems/missing-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
    let start = 0;
    let end = nums.length - 1;
    // expected nums[i] = nums[0] + i
    // actual : nums[i]
    // missing: actual - expected
    // missing: nums[i] - nums[0] - i
    
    while(start <= end) {
        const mid = start + Math.floor((end - start)/2);
        // Find out missing on mid 
        const missing = nums[mid] - nums[0] - mid;
        if(missing < k) { // left zone
            // move right
            start = mid + 1;
        } else {
            // move left
            end = mid - 1;
        }
    }
    // find out missing number
    const missing =  nums[end] - nums[0] - end;
    return nums[end] + (k - missing);
    
};
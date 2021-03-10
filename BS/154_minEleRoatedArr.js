// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    const n = nums.length;
    let right = n-1;
    let pivot = nums[n-1];
    
    while(nums[left] === pivot) {
        left++;
    }
    
    if(left == n) {
        return nums[left-1] 
    }
    while(left <=right) {
        let mid = left + Math.floor((right - left) / 2);
        
        if(nums[mid] > pivot) {
            left = mid + 1;
        } else {
            right = mid - 1
        }
        
    }
    return nums[left];
    
};
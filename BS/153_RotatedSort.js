// 153  https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let n = nums.length - 1;
    let right = n;
    
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        
        // if last element is less than the first element we need move to right side
        // else left side
        if(nums[mid] > nums[n]) {
            left = mid + 1;
        } else {
            right = mid -1
        }
    }
    return nums[left];
};
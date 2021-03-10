// https://leetcode.com/problems/search-insert-position/

var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left;
};
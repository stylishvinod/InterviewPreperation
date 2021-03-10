// https://leetcode.com/problems/single-element-in-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right) {
        let mid = left + Math.floor((right-left) /2);
        
        if((nums[mid] !== nums[mid+1])  && (nums[mid] !== nums[mid-1])) {
            return nums[mid];
        }
        
        let pos = mid;
        
        if(nums[mid] === nums[mid-1]) {
            pos = mid -1;
        }
        
        if(pos%2 === 0) {
            left = mid +1;
        } else {
            right = mid - 1
        }
      
    }
    
    return  -1
};
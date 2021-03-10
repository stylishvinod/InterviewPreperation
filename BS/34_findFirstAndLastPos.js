// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function(nums, target) {
    if(!nums) return [-1, -1];
    
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        
        if(nums[mid] === target) {
            let leftBound = findBound(nums, 0, mid-1, target, 'leftSrc');
            let rightBound = findBound(nums, mid + 1, nums.length - 1, target, 'rightSrc');
            return [leftBound, rightBound];
        }else if(nums[mid] < target) {
            left = mid + 1;
            
        } else {
            right = mid - 1;
        }
    }
    
    return [-1, -1]
};

const findBound = (nums,left, right, target, type) => {
    
    while(left <= right) {
          let mid = left + Math.floor((right - left) / 2);
        
        if(nums[mid] === target) {
            if(type === 'leftSrc') {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }else if(nums[mid] < target) {
            left = mid + 1;
            
        } else {
            right = mid - 1;
        }
        
    }

    
    return type === 'leftSrc' ? left : right
}
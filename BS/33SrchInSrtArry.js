//33 https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let n = nums.length - 1;
    let right = n;
    let zone = 0;
    // since in the input there are two sorted arrays divide them like two zones.
    // ex: zone: 0 :  4,5,6,7
    //.    zone:1  : 0, 1, 2
    
    // pivot is last element in the total array
    let pivot = nums[n];
    
    if(pivot >= target) {
        zone = 1
    }
    
    while(left <= right) { // norma BS
        let mid = left + Math.floor((right - left) / 2);
        
        let value = nums[mid];
        
        //early return
        if(value === target) return mid;
        
        // everytime when we find mid need to search the zone of that tmp
        let tmpZone = 0;
        
        if(pivot >= value) {
            tmpZone = 1;
        }
        
        // if mid and target are in same zone, normal BS
        if(tmpZone === zone) {  // same zone
            if(value < target) {
                left = mid +1;
            } else {
                right = mid - 1;
            }
        } else { // else need to move the tmpzone to correct zone
            if(tmpZone === 0) { // move to 'right' zone
                left = mid + 1;
            } else { // move to 'left' zone
                right = mid - 1
            }
        } 
    }
    return -1;
};
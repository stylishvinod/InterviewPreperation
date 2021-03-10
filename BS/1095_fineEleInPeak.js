
// https://leetcode.com/problems/find-in-mountain-array/

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    
    //step 1 : Find peak
    let left = 0;
    let n = mountainArr.length() - 1;
    let right = n;
    let peak = null;
    
    while(left <= right) {
        let mid = left + Math.floor((right - left)/2);
        if((mountainArr.get(mid) > mountainArr.get(mid - 1)) && (mountainArr.get(mid) > mountainArr.get(mid + 1))) {
           peak = mid;
           break;
           } else if(mid===0 || mountainArr.get(mid) > mountainArr.get(mid - 1)) {
            left = mid +1 ;
        } else {
            right = mid - 1;
        }
        
    }
    
    
    if(mountainArr.get(peak) === target) return peak;
    
    // step: 2 search in left side of peak

    let leftStart = 0;
    let leftEnd = peak - 1;
    
    while(leftStart <= leftEnd) {
        let mid = leftStart + Math.floor((leftEnd - leftStart) / 2);
        
        let value = mountainArr.get(mid);
        
        if(value === target) {
            return mid;
        } else if( value < target) {
            leftStart = mid + 1;
        } else {
            leftEnd = mid - 1;
        }
    }
    
  
    
    //step 3. search in right part of mountain
     let rightStart = peak + 1;
    let rightEnd = mountainArr.length() - 1;
    
    while(rightStart <= rightEnd) {
        let mid2 = rightStart + Math.floor((rightEnd - rightStart) / 2);
        
        let value2 = mountainArr.get(mid2);
        
        if(value2 == target) {
            return mid2;
        } else if( value2 < target) {
            rightEnd = mid2 - 1;
        } else {
            rightStart = mid2 + 1;
        }
    }
    
    return -1;
};
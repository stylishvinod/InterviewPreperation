
// https://leetcode.com/problems/peak-index-in-a-mountain-array/

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    
    let left = 0;
    let right = A.length - 1;
    // if it is Mountain, we can ignore all conditional check as we do in linear 
    // search process.
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        // if it is peack just return
        if((A[mid-1] < A[mid]) && (A[mid] > A[mid + 1])) {
            return mid;
        } else if(A[mid] > A[mid - 1]) {
            left = mid +1 // if mid value is greater than (mid-1) need to move right side
        } else {  // else left side
            right = mid - 1;
        }
    }
    
};
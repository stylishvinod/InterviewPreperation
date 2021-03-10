
// https://leetcode.com/problems/fixed-point/

/**
 * @param {number[]} A
 * @return {number}
 */
var fixedPoint = function(A) {
    let start = 0;
    let end = A.length;
    while(start <= end) {
        const mid = start + Math.floor((end - start)/2);
        if(A[mid] < mid) {
           // left zone, move right 
            start = mid + 1;
        } else {
            // equal and right zone, move left to find smallest index
            end = mid -1;
        }
    }
    return A[start] === start ? start : -1;
};
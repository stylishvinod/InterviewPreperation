// https://leetcode.com/problems/missing-number-in-arithmetic-progression/

/**
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function(arr) {
    const n = arr.length;
    const a = arr[0];
    const b = arr[n-1];
    const d = (b - a)/n;
    let start = 0;
    let end = n - 1;
    while(start <= end) {
        const mid = start + Math.floor((end - start)/2);
        // if arr[mid] is on right position then missing num will be on right otherwise on left
        if(arr[mid] === a + mid * d) {
            // move to right
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return arr[end] + d;
};
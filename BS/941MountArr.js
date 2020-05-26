
// 941

/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    const n = A.length;
    if(n < 3) return false;
    
    let left = 0;
    // move to right side and check every element is greater
    // in the same case left bound shouldn't reach the right bound
    while(left < n-1 && (A[left] < A[left + 1])) {
        left++;
    }
    // move from right to left;
    //check this move is increasing order
    // don't need to check the initial value, because it [right-1] goes out of array bound.
    let right = n-1;
    while(right>0 && (A[right-1] > A[right])) {
        right--;
    }
    
    // return result as true, if left & right are equal and they are not the array boundaries
    return ((left === right) && right !==0 && left !== n-1);
    
};
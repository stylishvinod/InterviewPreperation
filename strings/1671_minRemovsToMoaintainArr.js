// https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    
    const m = nums.length;
    const lis = new Array(m+1).fill(1);
    
    for(let i = 1; i <m; i++) {
        for(let j = 0 ; j < i; j++) {
            if(nums[i] > nums[j]) {
                lis[i] = Math.max(lis[i], lis[j] + 1);
            }
        }
    }
    
    // find LIS from righ to left
    const lisRev = new Array(m+1).fill(1);
    
    for(let i = m-2; i >= 0; i--) {
        for(let j = m-1; j >i; j--) {
            if(nums[i] > nums[j]) {
                lisRev[i] = Math.max(lisRev[i], lisRev[j]+1);
            }
        }
    }
    
    
    
    let max = 0;
    for(let i = 0 ; i <m; i++) {
        if(lis[i]>1 && lisRev[i]>1) {
            max = Math.max(max, lis[i]+lisRev[i]-1)
        }
    }
    
    return nums.length-max;
};
// https://leetcode.com/problems/wiggle-subsequence/


/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let m = nums.length;
    
    if(m < 2) return m;
    
    let prevDiff = nums[1]-nums[0];
    let count = prevDiff !== 0 ? 2 : 1;
    for(let i = 2; i <m; i++) {
        let diff = nums[i] - nums[i-1];
        if((diff >0 && prevDiff <=0) || (diff <0 && prevDiff >=0)) {
           count++;
           prevDiff = diff;
           }
    }
    
    return count;
};
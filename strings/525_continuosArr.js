//525 : https://leetcode.com/problems/contiguous-array/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = new Map();
    map.set(0, -1)
    let sum = 0;
    let max = 0;
    for(let i = 0 ; i < nums.length; i++) {
         sum  += nums[i] === 1 ? 1 : -1;
        if(map.has(sum)) {
            max = Math.max(max, i-(map.get(sum)))
        } else {
            map.set(sum, i);
        }
    }
    
    return max;
};
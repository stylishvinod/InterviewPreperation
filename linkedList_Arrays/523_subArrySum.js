// 523: https://leetcode.com/problems/continuous-subarray-sum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let map = new Map();
    let sum = 0;
    map.set(0, -1);
    
    for(let i= 0 ; i < nums.length; i++) {
        sum += nums[i];
        
        
          let  tmpSum = (k !== 0) ? sum%k : sum;
        
        
        if(map.has(tmpSum)) {
            console.log({map, i})
            if(i - map.get(tmpSum) > 1) {
                return true
            } 
        }else {
                map.set(tmpSum, i);
            }
    }
    console.log({map})
    return false
};


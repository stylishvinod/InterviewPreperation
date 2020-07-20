// 347 https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
 
    for(const num of nums) {
        map.set(num, map.get(num) + 1 || 1);
    }

    let newMap = [...map].sort((a,b) => b[1]-a[1]);
    
    return newMap.slice(0,k).map(e => e[0]);
    
};
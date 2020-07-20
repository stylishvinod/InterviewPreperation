// 350: https://leetcode.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = new Map();
    
    
    for(const num of nums1) {
        map.set(num, map.get(num) + 1  || 1);
    }
    let result = [];
    
    for(let num of nums2) {
        if(map.get(num)) {
            result.push(num);
            map.set(num, map.get(num) - 1);    
        }
    }
    return result;
};
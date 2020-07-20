// 560 https://leetcode.com/problems/subarray-sum-equals-k/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 // we have to calculate the sum of array from left
 // check if sum-k value exists in hash table
 // if yes take that value from has table and add top count
 // imp insert 0 value at initial
var subarraySum = function(nums, k) {
    let sum = 0; 
    let hash = new Map()
    hash.set(0,1)
    let count = 0
    
    for(let num of nums){
      sum += num
      if(hash.has(sum - k)){
        count += hash.get(sum-k)
      }
        
      hash.set(sum, (hash.get(sum) || 0) + 1)
    }
    
    return count
};
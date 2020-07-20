//179: https://leetcode.com/problems/largest-number/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if(nums.length === 0 ) return '';
    let numsArray = nums.map(a => a.toString());
    
    numsArray.sort((a, b) => `${b}${a}` - `${a}${b}`);
    if(numsArray[0] === '0') return '0'
    
    return numsArray.join('');
};



//Method: 2
var largestNumber = function(nums) {
  let len = nums.length;
    if(len===0)  return '';
    
    for(let i = 0 ; i < len - 1; i++) {
        for(let j = i+1; j < len; j++) {
            
            if(`${nums[i]}${nums[j]}` < `${nums[j]}${nums[i]}`) {
                swapEle(nums, i, j);
            }
        }
        
        
    }
    return nums[0] === '0' ? '0' : nums.join('');
};

let swapEle = (nums, left, right) => {
    [nums[left], nums[right]] = [nums[right], nums[left]];
}
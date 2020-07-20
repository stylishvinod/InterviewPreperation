//189: https://leetcode.com/problems/rotate-array/


//method::1

var rotate = function(nums, k) {
    nums.splice(0,0,...nums.splice(nums.length-k, k)) // or nums.unshift(...nums.splice(nums.length-k, k)
};


// method: 2
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;  // if k is greter we have to mod with length 
 // reverse entire input
 reverse(nums, 0, nums.length-1);
 //reverse from start to "k" elements
 reverse(nums, 0, k-1);
 //reverse from k to end
 reverse(nums, k, nums.length-1);
return nums;
};

let reverse = (nums, start, end) => {
 while(start < end) {
     let tmp =nums[start];
     nums[start] = nums[end];
     nums[end] = tmp;
     ++start;
     --end;
 }
}
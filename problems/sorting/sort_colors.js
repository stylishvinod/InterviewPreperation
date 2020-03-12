// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library's sort function for this problem.

// Example:

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]


// O(n) ans space O(1);

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0;
    let mid = 0;
    let end = nums.length - 1;
    while(mid <= end) {
        if(nums[mid] === 0) {
            swapEle(nums, start, mid);
            start++;
            mid++;
        }else if(nums[mid] === 1) {
            mid++;
        } else {
            swapEle(nums, mid, end);
            end--;
        }
    }
    
};

function swapEle(nums, start, end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
}
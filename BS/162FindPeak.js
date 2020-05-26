
// 162. https://leetcode.com/problems/find-peak-element/



/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(!nums) return - 1;
    if(nums.length === 1) return 0;
    
    let n = nums.length;
    // since in the problen after bounds it is -infinity
    // so we have to check '0' element is greater than the first element
    // and last element is greter than last-1 element
    if(nums[0] > nums[1]) return 0;
    if(nums[n-1] > nums[n-2]) return n-1;
    
    let left = 0;
    let right = n-1;
    
    // after that we can go with normal BS. since any one of peak is fine
    // so to get peak either we can go right or left
    while(left <=right) {
        let mid = left + Math.floor((right - left) / 2);
        
        if(nums[mid] > nums[mid + 1]  && nums[mid] > nums[mid - 1]) {
            return mid; 
        } else if(nums[mid + 1] > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
};

// 238 : https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let result = new Array(nums.length).fill(0);
    result[0] = 1;
    // calculate the product from left without including the curren element
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    // Now we need to get the product of right elements, maintain this in
    // a variable and update that on every iteration.
    let R = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = result[i] * R;
        R *= nums[i];
    }

    return result;
};
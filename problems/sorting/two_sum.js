//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//Given nums = [2, 7, 11, 15], target = 9,

//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].
//**************************************************************** */

// apprach -1
// Brute for having 2 loops and every element check the sum
// time complexity O(n^2)

function twoSum(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const sum = arr[i] + arr[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
}


// using hastable technique
// O(n)

function twoSum(nums, target) {
    const comp = {};
    for (let i = 0; i < nums.length; i++) {
        if (comp[nums[i]] >= 0) {
            return [comp[nums[i]], i]
        }
        comp[target - nums[i]] = i;
    }
};
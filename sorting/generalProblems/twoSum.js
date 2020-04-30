// 1  https://leetcode.com/problems/two-sum/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        let remaining = target - nums[i];
        if (hash.hasOwnProperty(remaining)) {
            return [hash[remaining], i];
        } else {
            hash[nums[i]] = i;
        }

    }
    return [];
};
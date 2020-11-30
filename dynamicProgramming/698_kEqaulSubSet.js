
// https://leetcode.com/problems/partition-to-k-equal-sum-subsets/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// Time complexity O(n!)
var canPartitionKSubsets = function (nums, k) {

    let n = nums.length;
    let totalSum = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }

    if (totalSum % k !== 0) return false;
    let paritionSum = totalSum / k;

    let visited = new Array(nums.length).fill(false);

    const canPartition = (start, partitions, currSum) => {
        // base condition
        if (partitions === 1) {
            return true;
        }

        if (currSum === paritionSum) {
            return canPartition(0, partitions - 1, 0);
        }

        for (let i = start; i < n; i++) {
            if (!visited[i]) {
                visited[i] = true;

                if (canPartition(i + 1, partitions, currSum + nums[i])) {
                    return true;
                }
                visited[i] = false
            }

        }
        return false;
    }

    return canPartition(0, k, 0);

};
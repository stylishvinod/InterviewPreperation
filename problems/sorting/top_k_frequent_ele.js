// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]


//https://leetcode.com/problems/top-k-frequent-elements/

function kClosest(nums, k) {
    let m = new Map()
    for (let i = 0; i < nums.length; i++) m.set(nums[i], m.get(nums[i]) ? m.get(nums[i]) + 1 : 1)

    return [...m].sort((a, b) => b[1] - a[1]).slice(0, k).map(e => e[0])

}
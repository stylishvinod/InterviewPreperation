// https://leetcode.com/problems/house-robber-ii/


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let len = nums.length;
    if(!len) return 0;
    if(len === 1) return nums[0];
    let rob1 = robHelper(nums, 0, len-2);
    let rob2 = robHelper(nums, 1, len-1);
    return Math.max(rob1, rob2);
};


const robHelper = (nums, start, end) => {
    
    let dp = new Array(nums.length).fill(0);
    dp[start] = nums[start];
    dp[start+1] = Math.max(nums[start], nums[start+1]);
    
    for(let i = start+2; i<=end;i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    }
    
    return dp[end];
}
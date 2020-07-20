//398 - https://leetcode.com/problems/random-pick-index/

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
     let result = -1;
        let count = 0;
        const min = 0;
        for (let i = 0; i < this.nums.length; i++) {
            if (this.nums[i] != target) {
                continue;
            }
            const max = ++count;
            const rand = Math.floor(Math.random() * max);
            
            if (rand === 0) {
                result = i;
            }
        }
        
        return result;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
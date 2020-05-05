// 239. https://leetcode.com/problems/sliding-window-maximum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let i = 0; let result = [];

    let deQue = [];

    while (i < nums.length) {
        // if DeQue .length is greather than zero    
        if (deQue.length > 0) {
            // first check if the first element in deque is out of window index.
            if (deQue[0] < i - k + 1) deQue.shift();

            // check if current value is greather than first elelemt
            // of deQue, if yes empty the deQue
            if (nums[i] > nums[deQue[0]]) {
                deQue.length = 0;
            } else {
                //  check if current element is greather than last elemnt of deQue
                // if yes pop the last element untill either Deque is empty or
                // you find last element is greter than deQue.
                while (deQue.length > 0 && nums[i] > nums[deQue[deQue.length - 1]]) {
                    deQue.pop();
                }
            }
        }
        // we have to push index of nums in deQue, not the actual value. 
        deQue.push(i);
        if (i >= k - 1) result.push(nums[deQue[0]]);
        i++;
    }
    return result;
};
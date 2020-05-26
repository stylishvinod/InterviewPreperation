

// 90 .https://leetcode.com/problems/subsets-ii/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
   nums.sort((a,b) => a-b);
   helper(nums, nums.length - 1, [], res);
   
   return res;
};

const helper = (nums, i, arr, res) => {
   if (i < 0) {
       return res.push([...arr]);
       
   }
   let num = nums[i];
   arr.push(num);
   helper(nums, i - 1, arr, res);
   arr.pop(num);
   
   if(arr[arr.length-1] === num) return;
   helper(nums, i - 1, arr, res);
};


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

// Method:2

const recursion = (nums, i, slate, output) => {
    // base case: for leaf node
    if(i === nums.length) {
        output.push([...slate]);
        return;
    }
    
    // choose i
    slate.push(nums[i]);
    recursion(nums, i+1, slate, output);
    slate.pop(); // remove for cleanup
    
    // ignore all duplicates
    while(nums[i] === nums[i+1]) {
        i++;
    }
    
    // ignore i
    recursion(nums, i+1, slate, output);
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b)
    const output = [];
    recursion(nums, 0, [], output);
    return output;
};
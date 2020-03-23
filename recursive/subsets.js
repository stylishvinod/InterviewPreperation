// number of subsets of a given array of size n is 2^n.

function subsets(nums) {
    return subsetHelper([], nums, []);
}
function subsetHelper(slate, nums, result) {
    if (nums.length === 0) {
        result.push(slate);
        return result;
    }
    let ele = nums.splice(0, 1);
    subsetHelper(slate, nums, result);
    subsetHelper(slate.concat(ele), nums, result);
}


// creating subsets even if duplicates in input array
var subsets = function (nums) {
    let res = [];

    helper(nums, nums.length - 1, [], res);
    console.log("vinod result", res);
    return res;
};

const helper = (nums, i, arr, res) => {
    if (i < 0) {
        res.push(arr);
        return;
    }
    if(nums[i] === nums[i-1]) {
    	i = i -1;
    }
    helper(nums, i - 1, arr, res);
    helper(nums, i - 1, arr.concat(nums[i]), res);
};
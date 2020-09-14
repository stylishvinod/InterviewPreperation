
function countSrtStabilized(nums) {
    let max = nums[0];
    for(let i = 1 ; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }

    let counts = [];
    for(let i=0;i<max;i++) {
        counts[i] = [];
    }

    for(let i= 0 ; i < nums.length; i++) {
        counts[nums[i]].push(nums[i]);
    }
}


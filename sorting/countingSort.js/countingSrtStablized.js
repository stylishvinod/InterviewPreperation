

function countingSrtStbl(nums) {
    // finding the range, so find the max element
    let max = 0
    for(let i = 0 ; i< nums.length; i++) {
        max = Math.max(max, nums[i])
    }
    // initialize the count array with max + 1(since array start with '0')
    let countArry = new Array(max + 1) .fill(0);
    
    //get the count of each number
    for(let i = 0 ; i< nums.length; i++) {
        countArry[nums[i]]++;
    }

    // cumulate sum of countArry from prev index
    
    for(let i= 1 ; i < countArry.length; i++) {
        countArry[i] += countArry[i-1];
    }
    
    //create new output array
    let outputArry = new Array(nums.length).fill(0);
    
    // iterate through input and fil the output from back
    // based on index present in countArry
    
    for(let i = nums.length -1; i>= 0; i--) {
        outputArry[--countArry[nums[i]]] = nums[i];
    }
    
    return outputArry;
}


/// another version with extra space

function countSrtStabilized(nums) {
    let max = nums[0];
    for(let i = 1 ; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }
    let counts = [];
    for(let i=0;i<=max;i++) {
        counts[i] = [];
    }
    for(let i= 0 ; i < nums.length; i++) {
       counts[nums[i]].push(nums[i])
    }
    let index = 0;
    for(let i = 0 ; i< counts.length; i++) {
        let lenOfVal = counts[i];
        for(let j = 0 ; j< lenOfVal.length; j++) {
            nums[index++] = lenOfVal[j];
        }
    }
    return nums;
}


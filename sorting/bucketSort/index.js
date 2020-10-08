function bucketSortForAll(nums) {
    let positive = [];
    let negative = [];

    for(let i = 0 ; i < nums.length; i++) {
        if(nums[i] < 0) {
            negative.push(nums[i] * -1);
        } else {
            positive.push(nums[i]);
        }
    }
    negative = bucketSort(negative);
    
    positive = bucketSort(positive);

    let idx = 0;

    for(let i = negative.length - 1 ; i >= 0 ; i--) {
        nums[idx++] = -1 * negative[i];
    }

    for(let i = 0; i < positive.length; i++) {
        nums[idx++] = positive[i]
    }

    return nums;
}


function bucketSort(nums) {
    let maxNum = Math.max(...nums);
    let sizeOfBucket = maxNum / nums.length;

    const buckets = new Array(nums.length).fill(0).map(a => []);
    

    for(let num of nums) {
        const index = getIndexOfNum(num, sizeOfBucket);
        buckets[index].push(num)

    }

    let inx = 0;
    for(let eachBucket of buckets) {
        eachBucket.sort((a,b) => a-b);
        for(let i=0; i< eachBucket.length; i++) {
            nums[inx] = eachBucket[i];
            inx++;
        }
    }

    return nums;

}

function getIndexOfNum(num, sizeOfBucket) {
    if(sizeOfBucket === 0) return 0;

    const index = Math.floor(num / sizeOfBucket);
    return index === 0 ? index : index - 1;
}






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

function radixSort(nums) {
    //get max digits in a num of nums
    
    let maxDigits = 0;
    for(let i = 0 ; i < nums.length; i++) {
     maxDigits = Math.max(maxDigits, nums[i].toString().length);   
    }
    
    //for each digit sort the numbers 
    for(let i = 0 ;i < maxDigits; i++ ) {
    
        let tmpArry = new Array(10).fill(0).map(a => []);
        
        for(let j = 0 ; j < nums.length; j++) {
            let numDigit = getDigitOfNumber(nums[j], i);
            let num = nums[j];
            
            tmpArry[numDigit].push(nums[j]);
        }
        
        let pos = 0;
        for(let i = 0 ; i< tmpArry.length; i++) {
            let numCount =  tmpArry[i];
            for(let j =0; j< numCount.length; j++) {
                nums[pos++] = numCount[j];
            }
        }
         
    }
    
    return nums;
}
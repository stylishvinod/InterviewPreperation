//radixSor


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
            tmpArry[numDigit].push(nums[j]);
        }
        
        // update original nums array with intermediate sort result
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
    
function getDigitOfNumber(num, pos) {
    return   Math.floor(num / Math.pow(10, pos)) % 10;
    
}
function quickSort(nums, start, end) {
    if(start >= end) return;
    let pivot = getPivotIndex(start, end);
    let tmpeArray = [];
     swapEle(nums, start, pivot);
    const pivotEle = nums[start];
    
    let i = 0;
    let j = start + 1;
    let k = end;
    while(j <= end) {
        if(nums[j] <= pivotEle) {
            tmpeArray[i] = nums[j];      
            i++;
        } else {
            tmpeArray[k] = nums[j]
            k--;
        }
        j++;
    }

    tmpeArray[i] = pivotEle;

    for(let i = 0; i < tmpeArray.length; i++) {
        nums[i+ start] = tmpeArray[i]
    }

    quickSort(nums, start, i+start-1);
    quickSort(nums, i+start+1, end);
    return nums;  
}
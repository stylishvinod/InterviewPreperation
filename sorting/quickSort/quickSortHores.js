// QuickSort Hores algorithm
//two pointer start at two different edges.

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    return quickSortNew(arr, 0, arr.length - 1);
}

function quickSortNew(nums, start, end) {
    if(start >= end) return;
    let pivotIndex =  getHoresIndex(nums, start, end);
    quickSortNew(nums, start, pivotIndex - 1)
    quickSortNew(nums, pivotIndex + 1, end);
    return nums;
    
}

function getHoresIndex(nums, start, end) {
    let pivot = getPivot(start, end);
    swapEle(nums, start, pivot);
    
    let orange = start + 1;
    let green = end;
    
    while(orange <= green) {
        if(nums[orange] <= nums[start]) {
            orange++;
        } else if(nums[green] > nums[start]) {
            green--;
        } else {
            swapEle(nums, orange, green)
        }
    }
    swapEle(nums, start, orange-1);
    return orange-1;
}
    
function getPivot(start, end)  {
    return  start + (Math.floor( Math.random()) * (end -start));
}


// function quickSortHelper(arr, start, end) {
//     if (start >= end) return;
    
//     const pivot = genRandomNumBwGivenNum(start, end);
//     swapElements(arr, start, pivot);
//     let partitionIndex = getPartitionIndex(arr, start, end);
//     swapElements(arr, start, partitionIndex - 1);
//     quickSortHelper(arr, start, partitionIndex - 2);
//     quickSortHelper(arr, partitionIndex, end);
//     return arr;
// }

// function getPartitionIndex(arr, start, end) {
//     let minPoint = start + 1;
//     let maxPoint = end;
//     while (minPoint <= maxPoint) {
//         if (arr[minPoint] <= arr[start]) {
//             minPoint++;
//         } else {
//             swapElements(arr, minPoint, maxPoint);
//             maxPoint--;
//         }
//     }
//     return minPoint;
// }
// function genRandomNumBwGivenNum(min, max) {
//     return Math.floor(Math.random() * (+max - +min)) + +min; 
// }

function swapElements(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}
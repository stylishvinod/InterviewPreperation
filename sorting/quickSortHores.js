// QuickSort Hores algorithm
//two pointer start at two different edges.

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    return quickSortHelper(arr, 0, arr.length - 1);
}

function quickSortHelper(arr, start, end) {
    if (start >= end) return;
    
    const pivot = genRandomNumBwGivenNum(start, end);
    swapElements(arr, start, pivot);
    let partitionIndex = getPartitionIndex(arr, start, end);
    swapElements(arr, start, partitionIndex - 1);
    quickSortHelper(arr, start, partitionIndex - 2);
    quickSortHelper(arr, partitionIndex, end);
    return arr;
}

function getPartitionIndex(arr, start, end) {
    let minPoint = start + 1;
    let maxPoint = end;
    while (minPoint <= maxPoint) {
        if (arr[minPoint] <= arr[start]) {
            minPoint++;
        } else {
            swapElements(arr, minPoint, maxPoint);
            maxPoint--;
        }
    }
    return minPoint;
}
function genRandomNumBwGivenNum(min, max) {
    return Math.floor(Math.random() * (+max - +min)) + +min; 
}

function swapElements(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}
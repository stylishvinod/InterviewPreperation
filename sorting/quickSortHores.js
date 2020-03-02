// QuickSort Hores algorithm
//two pointer start at two different edges.

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    return quickSortHelper(arr, 0, arr.length - 1);
}

function quickSortHelper(arr, start, end) {
    if (start >= end) return;
    const pivot = Math.floor((start + end) / 2);
    swapElements(arr, start, pivot);
    let minPoint = start + 1;
    let maxPoint = end + 1;
    while (minPoint < maxPoint) {
        if (arr[minPoint] <= arr[start]) {
            minPoint++;
        } else {
            maxPoint--;
            swapElements(arr, minPoint, maxPoint);
        }
    }
    swapElements(arr, start, minPoint - 1);
    quickSortHelper(arr, start, minPoint - 2);
    quickSortHelper(arr, minPoint, end);
    return arr;
}



function swapElements(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}
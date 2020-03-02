function mergeSort(arr) {
    if(arr.length <=1) return;
    return mergeSortHelper(arr, 0, arr.length - 1);
}

function mergeSortHelper(arr, start, end) {
    if (start >= end) return;
    const mid = Math.floor((start + end) /2);
    mergeSortHelper(arr, start, mid);
    mergeSortHelper(arr, mid + 1, end);
    let i = start;
    let j = mid + 1;
    let k =start;
    let tempArr = [];
 
    while(i <= mid && j <= end) {
        if(arr[i] <= arr[j]) {
            tempArr[k] = arr[i];
            i++;
            k++;
        } else {
            tempArr[k] = arr[j];
            j++;
            k++;
        }
    }

    while(i<= mid) {
        tempArr.push(arr[i]);
        i++;
    }

    while(j<= end) {
        tempArr.push(arr[j]);
        j++;
    }

    for(var r=start; r< tempArr.length; r++) {
        arr[r] = tempArr[r];
    }
    return arr;
}
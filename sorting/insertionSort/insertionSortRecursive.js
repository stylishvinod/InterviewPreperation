function insertionSort(arr, n) {
    if (n <= 0) return;
    insertionSort(arr, n - 1);
    const minEle = arr[n];
    let j = n - 1;
    while (j >= 0 && arr[j] > minEle) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = minEle;
    return arr;
}


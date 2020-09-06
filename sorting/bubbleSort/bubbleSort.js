function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let loopLen = arr.length - 1;
        for (let j = 0; j < loopLen - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swapElements(arr, j, j + 1);
            }
        }
        loopLen--;
    }
    return arr;
}

function swapElements(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

function bubble(arr) {
    for(let i = 0 ; i < arr.length; i++) {
        for(let j = i;j<arr.length - 1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}

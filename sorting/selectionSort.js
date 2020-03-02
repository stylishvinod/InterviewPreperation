// Selection Sort O(n square);

function selectionSort(arr) {
    for(let i=0; i<arr.length - 1; i++){
        let min = i;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }

        if(i !== min) {
            swapElements(arr, i, min);
        } 
    }
    return arr;
}

function swapElements(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}
// Building max Heap for a given array.
// call function maxHeapBuild with given array.
// O(n) = nlog(n)

function maxHeapBuild(arr) {
    if (arr.length <= 1) return;
    createHeap(arr, arr.length);
    return arr;
}

function createHeap(arr, n) {
    let startHeap = Match.floor((n / 2) - 1);

    for (let i = startHeap; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

function heapify(arr, n, i) {
    let largest = i;
    let leftNode = 2 * i + 1;
    let rightNode = 2 * i + 2;

    if (leftNode < n && arr[leftNode] > arr[largest]) {
        largest = leftNode;
    };

    if (rightNode < n && arr[rightNode] > arr[largest]) {
        largest = rightNode;
    }

    if (largest !== i) {
        swapElements(arr, largest, i);
        heapify(arr, n, largest);
    }
}


function swapElements(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}
// Building min Heap for a given array.
// call function minHeapBuild with given array.
//O(n) = nlog(n)

function minHeapBuild(arr) {
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
    let smallest = i;
    let leftNode = 2 * i + 1;
    let rightNode = 2 * i + 2;

    if (leftNode < n && arr[leftNode] < arr[smallest]) {
        smallest = leftNode;
    };

    if (rightNode < n && arr[rightNode] < arr[smallest]) {
        smallest = rightNode;
    }

    if (smallest !== i) {
        swapElements(arr, smallest, i);
        heapify(arr, n, smallest);
    }
}


function swapElements(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}
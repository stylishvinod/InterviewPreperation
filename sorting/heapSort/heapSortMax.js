// sorting in descending order.
// need to build minHeap first;
// delete root element and move last leaf node to the root. then apply heapify 
//* process again to the rest of tree.
// Building a tree is nlog(n) then delete element is O(nlog(n))
// so overall O(nlog(n)) 



function maxHeapSort(arr) {
    if (arr.length <= 1) return;
    return heapSort(arr, arr.length);
}


function heapSort(arr, n) {
    let firstNonLeafNode = Math.floor((n/2) - 1); 
    for (let i = firstNonLeafNode; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i >= 0; i--) {
        swapElements(arr, 0, i);
        heapify(arr, i, 0);
    }
    return arr;
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
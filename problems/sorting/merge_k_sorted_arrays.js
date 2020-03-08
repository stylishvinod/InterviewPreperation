

function mergeKSorted(arrays) {
    let result = [];
  
    let minHeap = [];
  
    arrays.forEach((array, index) => {
      minHeap.push({
        arrayIndex: index,
        elementIndex: 0,
        value: array[0]
      });
    })

    heapify(minHeap);

    while(minHeap[0].value !== Infinity) {
        let top = minHeap[0]
        result.push(top.value);
        top.elementIndex += 1;
        if(top.elementIndex >= arrays[top.arrayIndex].length) {
          top.value = Infinity;
        } else {
          top.value = arrays[top.arrayIndex][top.elementIndex];
        }
        bubbleDown(minHeap, 0);
      }
  
    return result;

}


function getChildIndices(index) {
    return [(2 * index) + 1, (2 * index) + 2];
  }


  function findMinChildIndex(minHeap, leftIndex, rightIndex) {
    let minChildIndex;
    let leftChild = minHeap[leftIndex];
    let rightChild = minHeap[rightIndex];
  
    if(leftChild !== undefined) {
      if(rightChild === undefined) {
        minChildIndex = leftIndex;
      } else {
        minChildIndex = rightChild.value < leftChild.value ? rightIndex : leftIndex;
      }
    }
    return minChildIndex;
  }


  function bubbleDown(minHeap, index) {
    let currentIndex = index;
    let current = minHeap[currentIndex];
    let [leftIndex, rightIndex] = getChildIndices(currentIndex);
    let minChildIndex = findMinChildIndex(minHeap, leftIndex, rightIndex);
    let minChild = minChildIndex === undefined ? undefined : minHeap[minChildIndex];
  
    while(minChild !== undefined && current.value > minChild.value) {
      [minHeap[currentIndex], minHeap[minChildIndex]] = [minHeap[minChildIndex], minHeap[currentIndex]];
  
      currentIndex = minChildIndex;
  
      [leftIndex, rightIndex] = getChildIndices(currentIndex);
  
      minChildIndex = findMinChildIndex(minHeap, leftIndex, rightIndex);
  
      minChild = minChildIndex === undefined ? undefined : minHeap[minChildIndex];
    }
  }


  function heapify(minHeap) {
    for(let i = minHeap.length - 1; i >= 0; i--) {
      bubbleDown(minHeap, i);
    }
  }
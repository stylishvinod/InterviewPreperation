//quicksort lumitos
// two points start at same place
function QuickSort(a) {
    return sortHelper(a, 0, a.length - 1);

}

function sortHelper(a, start, end) {
   if(start >= end) return;
   var pivot = genRandomNumBwGivenNum(start, end);
   swapHelper(a, start, pivot);
   let partitionIndex = getPartitionIndex(a, start, end);
   swapHelper(a, start, partitionIndex);
   sortHelper(a, start, partitionIndex - 1);
   sortHelper(a, partitionIndex + 1, end);
   return a;
}

function getPartitionIndex(a, start, end) {
    let orange = start;
    let green = start + 1;
    while(green <= end) {
        if(a[green] <= a[start]) {
            orange++;
            swapHelper(a, green, orange);
        };
        green++;
    }

    return orange;
}

function genRandomNumBwGivenNum(min, max) {
    return Math.floor(Math.random() * (+max - +min)) + +min; 
}

function swapElements(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}
//quicksort lumitos
// two points start at same place
function QuickSort(a) {
    return sortHelper(a, 0, a.length - 1);

}

function sortHelper(a, start, end) {
   if(start >= end) return;
   var pivot = Math.floor((start + end)/2);
   swapHelper(a, start, pivot);
   var orange = start;
   var green = start + 1;
   while(green <= end) {
       if(a[green] <= a[start]) {
           orange++;
           swapHelper(a, green, orange);
       };
       green++;
   }
   swapHelper(a, start, orange);

   sortHelper(a, start, orange - 1);
   sortHelper(a, orange + 1, end);
   return a;
}


function swapElements(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}
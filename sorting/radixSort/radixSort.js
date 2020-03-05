//radixSor


function radixSort(arr) {
    const digits = getTotalDigits(arr);
    for(let i=0;i < digits;i++){
        let buckets = Array.from({length:10},()=>[ ]);
         
         for (let j = 0; j < arr.length; j++) {
            buckets[getDigit(arr[ j ], i)].push(arr[ j ]);
          }
          arr = [].concat(...buckets);
      }
      return arr;
}

function getDigit(num, pos) {
    return  Math.floor((num / Math.pow(10, pos - 1)) % 10);
}

function getTotalDigits(arr) {
    let count = 0;
    for (let num of arr) {
        if (count < num.toString().length) {
            count = num.toString().length
        }
    }
    return count
}
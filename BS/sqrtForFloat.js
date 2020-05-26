


let squareRoot = function(num) {
    // TODO: Write - Your - Code 
    let start = 0;
    let end = num;
    let precision = 1/Math.pow(10,6);
  
    while(start <= end) {
      let mid = start + ((end - start ) /2);
      let sq = mid * mid;
      let diff = Math.abs(sq-num);
      if( diff <= precision || sq === num) {
        return mid;
      } else if (sq > num) {
        end =mid;
      } else {
        start = mid;
      }
    }
    return end;
  };
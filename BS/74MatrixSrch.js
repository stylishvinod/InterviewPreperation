

//74


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix.length) return false;
    let rows = matrix.length;
    let cols = matrix[0].length
    let start = 0;
    let end =  (rows * cols) - 1;
    
    while(start <= end) {
        let mid = start + Math.floor((end-start) / 2);
        let i = Math.floor(mid/cols);  // need to know these formule.
        let j = Math.floor(mid % cols);
        
        if(matrix[i][j] === target) return true;
        if(matrix[i][j] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
};
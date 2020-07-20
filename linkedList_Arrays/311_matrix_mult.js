

var multiply = function(A, B) {
    if(!A.length) return A;
    if(A[0].length !== B.length) return [];

     let result = new Array(A.length).fill(0).map(row => new Array(B[0].length).fill(0));

    return result.map((row, i) => {
        return row.map((val, j) => {
            return A[i].reduce((sum, elm, k) => sum + (elm*B[k][j]) ,0)
        })
    })
    return result;
};
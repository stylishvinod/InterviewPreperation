

//909 - https://leetcode.com/problems/snakes-and-ladders/


/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    return bfs(board);
    
};

const bfs = (board) => {
    let distance = new Map();
    let N = board.length;
    distance.set(1, 0);
    let q = [1];
    while(q.length) {
        let node = q.shift();
        
        if(node === N * N) return distance.get(node);
        for(let i = (node + 1); i <= Math.min((node + 6), N*N); i++ ) {
            let [r, c] = getRowAndCol(N, i);
            let next = (board[r][c] === -1) ? i : board[r][c];
            if(!distance.has(next)) {
                q.push(next);
                distance.set(next, distance.get(node) + 1);
            }
        }
    }
    return -1;
}


const getRowAndCol = (size, pos) => {
    
    let row = Math.floor((pos-1)/size);
    let col = (pos - 1) % size;
    col = row %2 === 1 ? size-col-1: col;
    row = size-row-1;
    console.log({pos,row, col})
    return [row, col];
}
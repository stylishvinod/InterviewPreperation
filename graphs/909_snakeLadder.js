

//909 - https://leetcode.com/problems/snakes-and-ladders/


/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
    return bfs(board);

};

const bfs = (board) => {
    let distance = new Map();
    let N = board.length;
    distance.set(1, 0);
    let q = [1];
    while (q.length) {
        let node = q.shift();

        if (node === N * N) return distance.get(node);
        for (let i = (node + 1); i <= Math.min((node + 6), N * N); i++) {
            let [r, c] = getRowAndCol(N, i);
            let next = (board[r][c] === -1) ? i : board[r][c];
            if (!distance.has(next)) {
                q.push(next);
                distance.set(next, distance.get(node) + 1);
            }
        }
    }
    return -1;
}


const getRowAndCol = (size, pos) => {

    let row = Math.floor((pos - 1) / size);
    let col = (pos - 1) % size;
    col = row % 2 === 1 ? size - col - 1 : col;
    row = size - row - 1;
    console.log({ pos, row, col })
    return [row, col];
}


// Method: 2

// convert 2D board to 1D board and then simple BFS
/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
    const N = board.length;
    const arr = new Array((N * N) + 1).fill(0);

    let index = 1;
    let leftToRight = true;
    for (let i = N - 1; i >= 0; i--) {
        if (leftToRight) {
            for (let j = 0; j < N; j++) {
                arr[index++] = board[i][j];
            }
        } else {
            for (let j = N - 1; j >= 0; j--) {
                arr[index++] = board[i][j];
            }
        }
        leftToRight = !leftToRight;
    }

    const visited = new Array((N * N) + 1).fill(0);

    let qu = [1];
    let steps = 1;

    while (qu.length) {
        let size = qu.length;

        for (let k = 0; k < size; k++) {
            let node = qu.shift();
            for (let i = 1; i <= 6; i++) {
                let newNode = arr[node + i] === -1 ? (node + i) : arr[node + i];
                if (newNode === N * N) return steps;
                if (!visited[newNode]) {
                    qu.push(newNode)
                    visited[newNode] = 1
                }
            }
        }
        steps++;
    }
    return -1;
};


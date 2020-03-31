
//https://leetcode.com/problems/number-of-islands/submissions/


const getNeighbors = (grid, [i,j]) => {
    const neighbors = [];
    const m = grid.length;
    const n = grid[0].length;
    // top
    if(i-1 >= 0 && grid[i-1][j] === '1') {
        neighbors.push( [i-1, j]);
    }
    // bottom
    if(i+1 < m && grid[i+1][j] === '1') {
        neighbors.push( [i+1, j]);
    } 
    // left
    if(j-1 >=0 && grid[i][j-1] === '1') {
        neighbors.push( [i, j-1]);
    }
    // right
    if(j+1 < n && grid[i][j+1] === '1') {
        neighbors.push( [i, j+1]);
    }
    return neighbors;
}

const bfs = (grid, x, y) => {
    grid[x][y] = '0'; // mark as visited
    const queue = [[x,y]];
    while(queue.length > 0) {
        const node = queue.shift();
        const neighbors = getNeighbors(grid, node);
        for(let k=0; k < neighbors.length; k++) {
            const neighbor = neighbors[k];
            const [i, j] = neighbor;
            if(grid[i][j] === '1') { // if not yet visisted
                grid[i][j] = '0'; // change island to water
                queue.push(neighbor);
            }
        }
    }
}
const dfs = (grid, x, y) => {
    grid[x][y] = '0'; // mark as visisted
    const neighbors = getNeighbors(grid, [x,y]);
    for(let k=0; k < neighbors.length; k++) {
        const neighbor = neighbors[k];
        const [i, j] = neighbor;
        if(grid[i][j] === '1') { // if not yet visisted then launch dfs
            dfs(grid, i, j);
        }
    }    
}
const outerLoop = grid => {
    let counter = 0;
    // iterate each island and run bfs/dfs
    for(let i=0; i < grid.length; i++) {
        for(let j=0; j<grid[0].length; j++) {
            const cell = grid[i][j]; // use grid as inpace to record visisted
            if(cell === '1') { // island, i.e. need to launch dfs/bfs
                counter++;
                dfs(grid, i, j);
            }
        }
    }
    return counter; // this will give the number of disconnected components
}


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    return outerLoop(grid);
};
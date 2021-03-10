//https://leetcode.com/problems/flood-fill/submissions/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    return bfs(image, sr, sc, newColor);
};


const bfs = (grid, x, y,newColor) => {
    const initalValue = grid[x][y];
    if(newColor === initalValue) return grid;
    grid[x][y] = newColor; // mark as visited
    let queue = [[x,y]];
    while(queue.length > 0) {
        const node = queue.shift();
        const neighbors = getNeighbors(grid, node, initalValue);
        
        for(let k=0; k < neighbors.length; k++) {
            const neighbor = neighbors[k];
            const [i, j] = neighbor;
            
            if(grid[i][j] === initalValue) { // if not yet visisted
                grid[i][j] = newColor; // change island to water
                queue.push(neighbor);
               
            }
        }
    }
    
    return grid;
}

const getNeighbors = (grid, [i,j], initalValue) => {
    const neighbors = [];
    const m = grid.length;
    const n = grid[0].length;
    // top
    if(i-1 >= 0 && grid[i-1][j] === initalValue) {
        neighbors.push( [i-1, j]);
    }
    // bottom
    if(i+1 < m && grid[i+1][j] === initalValue) {
        neighbors.push( [i+1, j]);
    } 
    // left
    if(j-1 >=0 && grid[i][j-1] === initalValue) {
        neighbors.push( [i, j-1]);
    }
    // right
    if(j+1 < n && grid[i][j+1] === initalValue) {
        neighbors.push( [i, j+1]);
    }
    return neighbors;
}

// approach: 2

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const adjList = [[0,-1], [0, 1], [1,0], [-1,0]];

var floodFill = function(image, sr, sc, newColor) {
    return dfs(image, sr, sc, image[sr][sc], newColor)
};

const dfs = (grid, i, j, initialColor, newColor) => {
    if(initialColor === newColor) return grid;
    
    grid[i][j] = newColor;
    const neighours = getNeighbours(grid, i, j, initialColor);
    for(let [x,y] of neighours) {
        if(grid[x][y] === initialColor) {
            dfs(grid, x, y, initialColor, newColor);
        }
    }
    return grid;
}

const getNeighbours = (grid, i, j, initialColor) => {
    const result = [];
    const row = grid.length;
    const col = grid[0].length;
    
    for(let [x,y] of adjList) {
        if(x+i >=0 && x+i < row && j+y >=0 && j+y < col && grid[x+i][y+j] === initialColor ) {
            result.push([x+i, y+j])
        }
    }
    return result;
}
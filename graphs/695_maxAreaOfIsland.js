
//https://leetcode.com/problems/max-area-of-island/submissions/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    return outerLoop(grid);
};

const outerLoop = grid => {
    let lands = 0;
    // iterate each island an
    for(let i=0; i < grid.length; i++) {
        for(let j=0; j<grid[0].length; j++) {
            const cell = grid[i][j]; // use grid as inpace to record visisted
          //  console.log("vinod loop is", cell);
            if(cell === 1) { // island, i.e. need to launch dfs/bfs
                let connected = bfs(grid, i, j, 1);    
                lands = connected > lands ? connected : lands;
            }
        }
    }
    
    return lands; // this will give the number of disconnected components
}

const bfs = (grid, x, y,land) => {
    grid[x][y] = 0; // mark as visited
    let queue = [[x,y]];
    while(queue.length > 0) {
        const node = queue.shift();
        const neighbors = getNeighbors(grid, node);
        
        for(let k=0; k < neighbors.length; k++) {
            const neighbor = neighbors[k];
            const [i, j] = neighbor;
            
            if(grid[i][j] === 1) { // if not yet visisted
                grid[i][j] = 0; // change island to water
                queue.push(neighbor);
                ++land;
               
            }
        }
    }
    
    return land;
}

const getNeighbors = (grid, [i,j]) => {
    const neighbors = [];
    const m = grid.length;
    const n = grid[0].length;
    // top
    if(i-1 >= 0 && grid[i-1][j] === 1) {
        neighbors.push( [i-1, j]);
    }
    // bottom
    if(i+1 < m && grid[i+1][j] === 1) {
        neighbors.push( [i+1, j]);
    } 
    // left
    if(j-1 >=0 && grid[i][j-1] === 1) {
        neighbors.push( [i, j-1]);
    }
    // right
    if(j+1 < n && grid[i][j+1] === 1) {
        neighbors.push( [i, j+1]);
    }
    return neighbors;
}


// approach: 2
/**
 * @param {number[][]} grid
 * @return {number}
 */


const adjList = [[0,-1], [0, 1], [1,0], [-1,0]];

var maxAreaOfIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let maxArea = 0;
    for(let i = 0 ; i <m; i++) {
        for(let j=0; j < n; j++) {
            if(grid[i][j] === 1) {
    
              let area = dfs(grid, i , j);
                maxArea = Math.max(maxArea, area)
            }
        }
    }
    return maxArea;
};

const dfs = (grid, i, j) => {
    grid[i][j] = 0;
    let area = 1;
    const neighours = getNeighbours(grid, i, j);
    for(let [x,y] of neighours) {
        if(grid[x][y]===1) {
         area += dfs(grid, x, y);
        }
    }
    return area;
}

const getNeighbours = (grid, i, j) => {
    const result = [];
    const row = grid.length;
    const col = grid[0].length;
    
    for(let [x,y] of adjList) {
        if(x+i >=0 && x+i < row && j+y >=0 && j+y < col && grid[x+i][y+j] === 1 ) {
            result.push([x+i, y+j])
        }
    }
    return result;
}
//994 https://leetcode.com/problems/rotting-oranges/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    let totalDays = -1;    
    let freshOranges = 0
    let qu = [];
    
    for(let i = 0 ; i < grid.length; i++) {
        for(let j = 0;j < grid[0].length; j++) {
            if(grid[i][j] === 2) {
               qu.push([i,j])
            } else if(grid[i][j] === 1) {
                ++freshOranges;
            }
        }
    }
    //if there are no fresh oranges it means all are rotten
    if(freshOranges === 0) return 0;
    
    [totalDays, freshOranges] = bfs(grid, qu, totalDays, freshOranges);
    
    return freshOranges === 0 ? totalDays : -1;
};


const bfs = (grid, qu, totalDays, freshOranges ) => {
    while(qu.length) {
        let len = qu.length;
        ++totalDays;
        for(let i=0; i < len; i++) {
        let node = qu.shift();

        let neighbours = getNeighbours(grid, node);
            neighbours.forEach(([a,b]) => {
                    qu.push([a,b]);
                    grid[a][b] = 2
                    --freshOranges;
            })
        }
    }
    return [totalDays, freshOranges];
}


const getNeighbours = (grid, [i,j]) => {
    let neighbours = [];
    let array = [[0,1], [0, -1], [-1, 0], [1, 0]];
    array.forEach( ([a,b]) => {
        if(i+a >= 0 && i+a < grid.length && j+b >= 0 && j+b < grid[0].length && grid[i+a][j+b] === 1) {
            neighbours.push([i+a, j+b])
        }
    });
    return neighbours;
}
//547 https://leetcode.com/problems/friend-circles/


/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let m = M.length;
    let visited = new Array(m).fill(null);
    let connected = 0;
    
    for(i=0;i < m; i++) {
            if(!visited[i]) {
                connected++;
                bfs(M, visited, i);
            }
        }
    
    return connected;
    
};

const bfs = (grid, visited, root) => {
    visited[root] = 1  // changed to visited
    let q = [root];
    while(q.length) {
        let node = q.shift();
        let friends = getFriends(grid, node)
        
        for(let k= 0; k< friends.length; k++) {
            if(!visited[friends[k]]) {
                visited[friends[k]] = 1;
                q.push(friends[k]);
            }
            
            
        }
    }
    
}


const getFriends = (grid, node) => {
    let friends = [];
    let connectedFriends = grid[node];
    
    for(let i=0; i<connectedFriends.length; i++) {
        if(i !== node && connectedFriends[i] ===1) {
            friends.push(i);
        }
    }
    return friends;
}
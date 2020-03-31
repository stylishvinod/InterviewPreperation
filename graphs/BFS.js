
//https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/


/*
These problems are split into 3 parts.

1) creating the graph(adjucent lists).
2) DFS or BFS traversal
3) Main loop to return result bases on requirement.

*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

function buidGraph(n,edges) {
    let vert = [];
    
    for(let i=0; i<n; i++) {
        vert[i] = [];
    }
    
    edges.forEach(edge => {
        vert[edge[0]].push(edge[1]);
        vert[edge[1]].push(edge[0]);
        
    })
    
    return vert;
}

function bfs(graph, visited, start) {
    let q = [start];
    visited[start] = 1;
    
    while(q.length) {
        let node = q.shift();
        
        let adj = graph[node];
        adj.forEach(neigh => {
            if(!visited[neigh]) {
                q.push(neigh);
                visited[neigh] = 1;
            }
        })
    }
}
 

var countComponents = function(n, edges) {
    let graph = buidGraph(n, edges);
    console.log(graph);
    let visited = new Array(n).fill(0);
    console.log("vinod visited1", visited);
    let connected = 0;
    for(let i =0 ; i <n; i++) {
        
        if(!visited[i]) {
            connected++;
            console.log("vinod connected", connected,i );
    bfs(graph, visited,i);
        }
    };
    
   //  console.log("vinod comp", connected)
    return connected;
};

//https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/submissions/


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
    
    console.log("vinod arr", vert)
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

function dfs(graph, visited, start) {
    visited[start] = 1;
    let adj = graph[start];
     adj.forEach(neigh => {
            if(!visited[neigh]) {
             dfs(graph, visited, neigh)
            }
     });
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
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
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

function bfs(graph, visited, start, parent) {
    let q = [start];
    visited[start] = 1;
    parent[start] = null;
    while(q.length) {
        let node = q.shift();     
        let adj = graph[node];
        for(const neigh of adj) {
            if(!visited[neigh]) {
                q.push(neigh);
                visited[neigh] = 1;
                parent[neigh] = node;
            } else {
                if(parent[node] !== neigh) {
                    return true
                } 
            }
        }
    }
    return false;
}

var validTree = function(n, edges) {
      let graph = buidGraph(n, edges);
    console.log(graph);
    let visited = new Array(n).fill(0);
    let parent = new Array(n).fill(null);
    
    let connected = 0;
    for(let i =0 ; i <n; i++) {
        
        if(!visited[i]) {        
            connected++;
            if(connected > 1) {
                return false;
            }
            console.log("vinod connected", connected, );
    if(bfs(graph, visited,i, parent)) {
        return false;
    }
        }
    };
    
   //  console.log("vinod comp", connected)
    return true;
};
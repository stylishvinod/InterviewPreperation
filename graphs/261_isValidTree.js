
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    const graph = buildGraph(n, edges);
    let connected = 0;
    const visited = new Array(n).fill(0);
    const parent = new Array(n).fill(null);
    
    for(let i = 0 ; i <n; i++) {
        if(!visited[i]) {
            connected++;
            if(connected > 1) {
                return false;
            }
            
            if(!dfs(graph, i, visited, parent)) {
                return false
            }
        }
    }
    
    return true;
};

const dfs = (graph, node, visited, parent) => {
    visited[node] = 1;
    
    for(let nei of graph[node]) {
        if(!visited[nei]) {
            parent[nei] = node;
            if(!dfs(graph, nei, visited, parent)) {
                return false
            }
        } else {
            if(parent[node] !== nei) {
                return false;
            }
        }
    }
    
    return true;
}

const bfs = (graph, head, visited, parent) => {
    const qu = [head];
    parent[head] = null;
    visited[head] = 1;
    
    while(qu.length) {
        let node = qu.shift();
        for(let nei of graph[node]) {
            if(!visited[nei]) {
                visited[nei] = 1;
                parent[nei] = node;
                qu.push(nei)
            } else {
                if(parent[node] !== nei) {
                    console.log({parent, node, nei})
                    return false
                }
            }
        }
    }
    return true;
}


const buildGraph = (n, edges) => {
    const arr = new Array(n).fill(0).map(a => []);
    
    for(let [a,b] of edges) {
        arr[a].push(b);
        arr[b].push(a)
    }
    console.log({arr})
    return arr;
}
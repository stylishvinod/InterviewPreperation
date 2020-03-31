//https://leetcode.com/problems/is-graph-bipartite/

const bfs = (graph, visited, parent, distance, i) => {
    const queue = [i];
    visited[i] = 1;
    parent[i] = null;
    distance[i] = 0;
    while(queue.length > 0) {
        const node = queue.shift();
        for(const neighbor of graph[node]) {
            if(!visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = 1;
                parent[neighbor] = node;
                distance[neighbor] = distance[node] + 1;
            } else {
                // check possibility of cycle
                if(parent[node] !== neighbor) {
                    // cycle exist, now check for odd length cycle
                    // if same level cross edge then odd cycle
                    if(distance[node] === distance[neighbor]) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const n = graph.length;
    const visited = new Array(n).fill(0);
    const parent = new Array(n).fill(null);
    const distance = new Array(n).fill(0);
    for(let i=0; i < n; i++) {
        if(!visited[i]) {
            if(!bfs(graph, visited, parent, distance, i)) {
                return false;
            }
        }
    }
    return true;
};
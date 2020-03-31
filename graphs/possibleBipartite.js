
//https://leetcode.com/problems/possible-bipartition/submissions/


/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    let visited = new Array(N).fill(0);
    let parent = new Array(N).fill(null);
    let distance = new Array(N).fill(null);
    let count = 0;
    const adjList = buildGraph(N, dislikes);
    console.log("vinod adjList", adjList);
    for (let node = 0; node < N; node++) {
        if (!visited[node]) {
            count++;
            
            if (!bfs(adjList, visited, parent, distance, node)) {
                return false;
            }
        }
    }
    return true;
};



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

const buildGraph = (N, dislikes) => {
    const adjList = new Array(N).fill(0).map(a => []);
    for(let i=0; i < dislikes.length; i++) {
        const [f, s] = dislikes[i];
        adjList[f-1].push(s-1);
        adjList[s-1].push(f-1);
    }
    return adjList;
}
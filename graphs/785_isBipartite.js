//https://leetcode.com/problems/is-graph-bipartite/


//Second APproach

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    let n = graph.length;
    let color = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        if (color[i] === -1) {
            color[i] = 0;
            let stack = [i];
            while (stack.length) {
                let node = stack.pop();
                for (let nei of graph[node]) {
                    if (color[nei] === -1) {
                        color[nei] = color[node] ^ 1;
                        stack.push(nei);
                    } else if (color[nei] === color[node]) {
                        return false;
                    }
                }

            }
        }


    }
    return true;

};


//  First Approach

const bfs = (graph, visited, parent, distance, i) => {
    const queue = [i];
    visited[i] = 1;
    parent[i] = null;
    distance[i] = 0;
    while (queue.length > 0) {
        const node = queue.shift();
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = 1;
                parent[neighbor] = node;
                distance[neighbor] = distance[node] + 1;
            } else {
                // check possibility of cycle
                if (parent[node] !== neighbor) {
                    // cycle exist, now check for odd length cycle
                    // if same level cross edge then odd cycle
                    if (distance[node] === distance[neighbor]) {
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
var isBipartite = function (graph) {
    const n = graph.length;
    const visited = new Array(n).fill(0);
    const parent = new Array(n).fill(null);
    const distance = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            if (!bfs(graph, visited, parent, distance, i)) {
                return false;
            }
        }
    }
    return true;
};
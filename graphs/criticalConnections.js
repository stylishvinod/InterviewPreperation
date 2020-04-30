//1192  https://leetcode.com/problems/critical-connections-in-a-network


/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    let graph = buildGraph(connections, n);
    let visited = new Array(n).fill(null);
    let parent= new Array(n).fill(null);
    let arrival= new Array(n).fill(null);
    let departure= new Array(n).fill(null);
    let oldArrivalTime= new Array(n).fill(null);
    let timestamp = 0;
    let result = [];
    
    dfs(graph, visited, parent, arrival, departure, oldArrivalTime, timestamp, result, 0);
    return result;
    
};

const buildGraph = (connections, n) => {
    // create adjacency list
    let graph = new Array(n).fill(null).map(a=>[]);
    
    for(const [a,b] of connections) {
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}
// dfs should return oldArrivalTime
const dfs =  (graph, visited, parent, arrival, departure, oldArrivalTime, timestamp, result, node) =>{
    visited[node] = true;
    arrival[node] = timestamp++;
    oldArrivalTime[node] = arrival[node];
    for(const neighbour of graph[node]) {
        if(!visited[neighbour]) {
            parent[neighbour] = node;
            const neighbourOldArrivalTime = dfs(graph, visited, parent, arrival, departure, oldArrivalTime, timestamp, result, neighbour);
            
            oldArrivalTime[node] = Math.min(oldArrivalTime[node], neighbourOldArrivalTime);
            
        }else {
            // if it is back end, we need to check (parent and neighbor) which oldArrival time is
            //minimum and move that value to the current node
            if(parent[node] !== neighbour) {
                oldArrivalTime[node] = Math.min(oldArrivalTime[node], oldArrivalTime[neighbour]);
            }
        }
    }
    departure[node] = timestamp++;
    // critical edge is one whose oldArrival and arrival times are same
    // also we need to ignore the start node
    if(oldArrivalTime[node] === arrival[node] && node !== 0 ) {
        result.push([node, parent[node]]);
    }
    return oldArrivalTime[node];
}
// https://leetcode.com/problems/course-schedule/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let visited = new Array(numCourses).fill(0);
    let arrival = new Array(numCourses).fill(-1);
    let departure = new Array(numCourses).fill(-1);
    let timestamp = 0;
    
    let graph = buidGraph(prerequisites, numCourses);

    for(let i = 0;i < numCourses; i++) {
        if(!visited[i]) {
            if(dfs(graph, i, arrival,departure,visited, timestamp)) {
                return false;
            }
        }
    }
    return true;
};


function dfs(graph, node, arrival, departure, visited, timestamp) {
    visited[node] = 1;
    arrival[node] = ++timestamp;

    for(let nei of graph[node]) {
        if(!visited[nei]) {
            if(dfs(graph, nei, arrival, departure, visited, timestamp)) {
                return true;
            }
        } else {
    
            if(departure[nei] === -1) {
                return true;
            }
        }       
    }
    departure[node] = ++timestamp;
    return false;
}


function buidGraph(cources, numCourses) {
    let graph = new Array(numCourses).fill(0).map(a => []);
    
    for(let [u,v] of cources) {
        graph[v].push(u);
    }
    return graph;
}
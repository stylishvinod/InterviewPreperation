//https://leetcode.com/problems/course-schedule-ii/



/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {

    // build tree
    let graph = buildGraph(numCourses, prerequisites);
    let visited = new Array(numCourses).fill(0);
    let parent = new Array(numCourses).fill(null);
    let arrival = new Array(numCourses).fill(null);
    let departure = new Array(numCourses).fill(null);
    let timeStamp = 0;
    let result = [];
    for(let i = 0 ; i<numCourses; i++) {
        if(!visited[i]) {
            if(dfs(graph, i, visited, parent, arrival, departure, timeStamp, result)) {
                return [];
            }
        }
    }
    return result;
    
};


const dfs = (graph, node, visited, parent, arrival, departure, timeStamp, result) => {
    visited[node] = 1;
    arrival[node] = timeStamp++;
    
    for(const neighbor of graph[node]) {
        if(!visited[neighbor]) {
            parent[neighbor] = node;
         if(dfs(graph, neighbor, visited, parent, arrival, departure, timeStamp, result)) {
             return true
         }; 
            
        } else {
            if(parent[neighbor] !== node && departure[neighbor] === null) {
                return true;
            }
        }
    }
    result.unshift(node);
    departure[node] = timeStamp++;
    return false;
}


const buildGraph = (nodes, list) => {
    let graph = [];
    for(let i=0; i<nodes; i++) {
        graph[i] = [];
    }
    
    
    list.forEach(ls => {
        graph[ls[1]].push(ls[0]);
    })
    return graph;
}


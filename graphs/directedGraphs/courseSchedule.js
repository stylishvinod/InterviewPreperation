//https://leetcode.com/problems/course-schedule


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // create tree
    let graph = buidGraph(numCourses, prerequisites)
    
    let visited = new Array(numCourses).fill(0);
    let parent = new Array(numCourses).fill(null);
    let departure = new Array(numCourses).fill(null);
    let arrival = new Array(numCourses).fill(null);
    let timestamp = 0;
    let result = [];
     for(let i =0 ; i <numCourses; i++) {
        
        if(!visited[i]) {
            if(dfs(graph, visited,i, parent, departure,arrival, timestamp, result)){
                return false;
            }
        }
    };
    return true;
};

function dfs(graph, visited, node, parent, departure,arrival, timestamp, result) {
    arrival[node] = timestamp++;
    visited[node] = 1;
    
    for(const neighbour of graph[node]) {
        if(!visited[neighbour]) {
            parent[neighbour] = node;
       const cycle = dfs(graph, visited, neighbour, parent, departure,arrival, timestamp, result);
            if(cycle) {
                return true
            }
        } else {
            //check cycle
            // check backedge if there is no departure time that is backedge
             if(parent[neighbour] !== node && departure[neighbour] === null) {
                return true;
            }
        }
    }
    result.push(node);
    departure[node] = timestamp++;
    return false;
    
}

function buidGraph(n,edges) {
    let vert = [];
    
    for(let i=0; i<n; i++) {
        vert[i] = [];
    }
    
    edges.forEach(edge => {
        vert[edge[1]].push(edge[0]);
    })
    
    return vert;
}


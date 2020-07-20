
// we are folling "kruskals" algorithm to find the min distance
// 1135 - https://leetcode.com/problems/connecting-cities-with-minimum-cost/
/**
 * @param {number} N
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(N, connections) {
    connections.sort((a,b) => a[2] - b[2] );
    let parent = new Array(N).fill(null).map((a,i) => i);
    let size = new Array(N).fill(1);
    let cost = 0;
    let connected = N;
    
    for(const [u,v,dist] of connections) {
        let rootU = searchRoot(parent, u);
        let rootV = searchRoot(parent, v);

        if(rootU !== rootV) {
            if(size[rootU] > size[rootV]) {
                parent[rootV] = rootU;
                size[rootU] += size[rootV]
            } else {
                parent[rootU] = rootV;
                size[rootV] += size[rootU];
            }
            connected--;
            cost +=dist;
            
            if(connected === 1) return cost;
        }
        
    }
    
    return -1;
};

const searchRoot = (parent, node) => {
    if(parent[node] === node) {
        return node;
    }
    
    let root = searchRoot(parent, parent[node]);
    parent[node] = root;
    return root;
    
}
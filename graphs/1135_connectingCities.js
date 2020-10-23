
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

// approach: 2 DP

/**
 * @param {number} N
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(N, connections) {
    let dp = new Array(N+1).fill(Number.MAX_SAFE_INTEGER);
    dp[1] = 0;
    
    for(let i =0; i < N-1; i++) {
        for(let [u, v, w ] of connections) {
            console.log({dp})
            if(dp[v] > dp[u] + w) {
                dp[v] = dp[u] + w;
            } 
        }
    }
    console.log({dp})
    dp.shift();
    let res = Math.max(...dp);
    
    return res === Number.MAX_SAFE_INTEGER ? -1 : res;
};
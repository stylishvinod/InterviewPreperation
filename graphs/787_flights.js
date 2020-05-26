
//787 : https://leetcode.com/problems/cheapest-flights-within-k-stops/

// O(mk)-- space O(nk)  
// This is called Bellman-ford algorithm
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    // k +2 edges will be there for for k stops
    let table = new Array(n).fill(null).map((a) => new Array(K+2).fill(Number.MAX_SAFE_INTEGER));
    
    table[src][0] = 0;
    
    // need to fill each column first with i-1 columm data
    
    for(let col=1; col < K+2; col++) {
        for(let vertex = 0; vertex < n; vertex++) {
            table[vertex][col] = table[vertex][col-1];
        }
        // iterate though fligh details and update the
        // current dest value as minmum of current destination and source with 
        // col-1 hops + cost
        for(const [u, v, cost] of flights) {
            table[v][col] = Math.min(table[v][col], table[u][col-1] + cost);
        }
    }
    

    return (table[dst][K+1] === Number.MAX_SAFE_INTEGER) ? -1 : table[dst][K+1]; 
};
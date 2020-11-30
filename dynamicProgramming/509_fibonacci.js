
// https://leetcode.com/problems/fibonacci-number/

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if(N===0 || N===1) return N;
    
    let cache= new Array(3).fill(null);
    cache[0] = 0 ; cache[1] = 1
    for(let i=2; i<=N; i++) {
        cache[i % 3] = cache[(i-1) %3] + cache[(i -2) % 3];
    }
    
    return cache[N%3];
    
};
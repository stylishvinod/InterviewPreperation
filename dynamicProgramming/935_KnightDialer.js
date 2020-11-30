//https://leetcode.com/problems/knight-dialer/

/*
N = number of steps we need to move

assume we are at '1' how may ways we can reach 1 with 1 step.

F(1, N) = F(1, 1) = F(6, 0) + F(8, 0)

it means we can reach 1 either from 6 or 8 with 1 step.
so we need to consider how can reach 8 or 6 with N-1 steps i.e 0.

here dp table
Rows represent number of dial 0-9
cols represent steps 0, 1, 2 ... N steps.


*/



/**
 * @param {number} N
 * @return {number}
 */
var knightDialer = function(N) {
    let incoming = new Array(10).fill(null).map(a => []);
    
    incoming[0].push(...[4,6]);
    incoming[1].push(...[6,8]);
    incoming[2].push(...[7,9]);
    incoming[3].push(...[4,8]);
    incoming[4].push(...[0,3,9]);
    incoming[5].push(...[]);
    incoming[6].push(...[0,1,7]);
    incoming[7].push(...[2,6]);
    incoming[8].push(...[1,3]);
    incoming[9].push(...[2,4]);
    
    let dp = new Array(10).fill(null).map(a => new Array(N).fill(0));
    
    // base case
    // row = dial numbers 0 -9
    //cols are number of hops
    
    for(let i=0; i < 10;i++) {
        dp[i][0] = 1;
    }
    // need to fill col wise
    //
    let modulo = Math.pow(10, 9) + 7;
    for(let j = 1; j < N;j++) {
        for(let i = 0 ; i < 10; i++) {
            let total = 0;
            const incomingNodes = incoming[i];
            for(let node of incomingNodes) {

                
                total += dp[node][j-1];
            }
            dp[i][j] = total % modulo;
        }
    }
    let result = 0
    for(let k = 0; k <10; k++) {
        result += dp[k][N-1];
    }
    
    return result % modulo;
};
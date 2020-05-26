//518 https://leetcode.com/problems/coin-change-2/



/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const row = coins.length;
    const cols = amount;
    const table = new Array(row + 1).fill(0).map(a => new Array(cols + 1).fill(0));
    
    // base case when no coins are present
    // then whatever amount only '0' is output
    for(let i =0; i < cols +1; i++) {
        table[0][i] = 0;
    }
    // base case: when amount is 0 then total 1 ways
    for(let i=0; i < row + 1; i++) {
        table[i][0] = 1;
    }
       
               // any value is sum of choose and no choose 
               // choose: if amount is greter (amount - coin value) then
                // substract that value get the corresponding fieldin table
                // No choose: is the filed above to it.
    
    for(let i = 1; i < row + 1; i++) {
        for(let j = 1; j < cols + 1; j++) {
            let choose = 0;
            //choose
            if(j-coins[i-1] >= 0 ) {
                choose = table[i][j-coins[i-1]];
            }
            table[i][j] = choose + table[i-1][j];
             
                
        }
    }
    
    return table[row][cols];

    
};
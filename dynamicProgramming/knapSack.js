// https://www.educative.io/courses/grokking-dynamic-programming-patterns-for-coding-interviews/RM1BDv71V60

let solveKnapsack = function(profits, weights, capacity) {
    //TODO: Write - Your - Code
    const dp = new Array(weights.length+1).fill(0).map(a => new Array(capacity+1).fill(0));
    
    for(let i = 1; i <= weights.length; i++) {
      for(let j = 1; j <= capacity; j++) {
        if( j < weights[i-1]) {
          dp[i][j] = dp[i-1][j]
        } else {
          dp[i][j] = Math.max(dp[i-1][j], profits[i-1] + dp[i-1][j-weights[i-1]])
        }
      }
  
    }
  
  console.log({dp})
  
    return dp[weights.length][capacity];
  };
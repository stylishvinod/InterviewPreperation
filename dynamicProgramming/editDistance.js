//72:: https://leetcode.com/problems/edit-distance/submissions/


/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length;
   let n = word2.length;
   let dist = new Array(m+1).fill(0).map(a => new Array(n+1).fill(0));

   // 0th colum will take delete operation same as number of chars in string
   for(let i = 0 ; i < m + 1; i++) {
       dist[i][0] = i;
   }
   // 0th colum will take delete operation same as number of chars in string
   for(let j = 0 ; j < n + 1; j++) {
       dist[0][j] = j;
   }
   
   for(let i = 1; i< m+1; i++ ) {
       for(let j = 1; j < n+1; j++) {
           let s = 0;
           if(word1[i-1] !== word2[j-1]) {
               s = 1;
           }
  
       dist[i][j] = Math.min(
           1 + dist[i-1][j], // delete
           1 + dist[i][j-1], // insert
           s + dist[i-1][j-1]  // replace
           );        
       }
   }

   return dist[m][n];
};
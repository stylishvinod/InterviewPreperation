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


// recursive

const minDistanceRecur = (word1, word2, i, j) => {
    // if both became empty then match
    if(i === word1.length && j === word2.length) {
        return 0;
    }
    if(i === word1.length) {
        return word2.length - j;
    }
    if(j === word2.length) {
        return word1.length - i;
    }
    // if char match then simply move to next
    if(word1[i] === word2[j]) {
        return minDistanceRecur(word1, word2, i+1, j+1);
    }
    // if not match then three options
    // Insert
    const insert = 1 + minDistanceRecur(word1, word2, i, j+1);
    // delete char in word1
    const del = 1 + minDistanceRecur(word1, word2, i+1, j);
    // replace char
    const replace = 1 + minDistanceRecur(word1, word2, i+1, j + 1);
    
    return Math.min(insert, del, replace);
}
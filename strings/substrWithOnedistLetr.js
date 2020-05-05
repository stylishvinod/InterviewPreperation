//https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/



/**
 * @param {string} S
 * @return {number}
 */
var countLetters = function(S) {
    let i=0; let j=0;
    let result = [];
    while(i < S.length && j < S.length) {
        if(S[i] === S[j]) {
            result.push(S.substring(i, j+1))
            j++;
        } else {
            i++;
            j = i
        }
        if(j === S.length) {
            i++;
            j=i;
        }
        
    }
  //  console.log(result);
    return result.length;
};
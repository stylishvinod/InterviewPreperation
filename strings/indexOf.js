
//28. https://leetcode.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0;
 //   if(needle.length > haystack.length) return -1;
    let i= 0;
    let j = 0
    while( i < haystack.length) {
        if(haystack[i] === needle[j]) {
            i++;
            j++;
        } else {
            // need to try next sequence, so go back to the found +1 position
            i = i -j +1;
            j = 0
            
        }
        if(j === needle.length) {
            return i-j;
        }
    }
   
    
    
    return -1;
};
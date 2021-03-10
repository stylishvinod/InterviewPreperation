//https://leetcode.com/problems/implement-strstr/


//  KMP approach-- O(N+M)

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0;
  // kmp algorithm
  // prepare pi or lps table
  let lps = new Array(needle.length).fill(0);

  let len = 0;
  let i = 1;
  while(i < needle.length) {
      if(needle[i] === needle[len]) {
          i++; len++;
          lps[i-1] = len;
      }else if(len > 0) {
          len = lps[len-1];
      } else {
          i++;
      }
  }
  
  len = 0;
  i = 0
  while( i< haystack.length && len < needle.length) {
      if(haystack[i] === needle[len]) {
          i++;
          len++
          if( len === needle.length) return (i-needle.length);
      } else if(len >0) {
          len = lps[len - 1];
      } else {
          i++
      }
  }
  return -1;
};

// Brute force   O(NM)

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0;
    
    let i=0, j=0;
    
    while(i< haystack.length) {
            if(haystack[i] === needle[j]) {
                i++;
                j++;
                
                if(j === needle.length) return i-j;
            } else {
                i = i - j + 1;
                j = 0;
            }
          
          }
    return -1;
};

// Rolling hash or robinKrap O(NM)



const getIndex = (char) =>  char.charCodeAt(0)- 'a'.charCodeAt(0);

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    const m = haystack.length;
    const n = needle.length;
    
    // if needle is empty return 0;
    if( n === 0) return 0;
    if(m < n) return -1;
    
    
    // builde has for needle
    let hash = 0;
    const PRIME = Math.pow(10, 6) + 1;
    for(let i = 0 ; i < n; i++) {
        const index = getIndex(needle[i]);
        hash = ((hash * 26) % PRIME + index) % PRIME;
    }
    
    const needlePrimeLength = Math.pow(26, n-1);
    
    
    
    // sliding window to go thorugh the haystack
    
    let i = 0, j= 0;
    let target = 0;
    
    while(j < m) {
        const index = getIndex(haystack[j]);
        target = ((target * 26) % PRIME + index) % PRIME;
        
        if(j >= (n-1)) {
            
            if(target === hash) { // if needle hash and current haystack has matches
                
                // go through and compare whole string for safterside
                let isMatched = true;
                for(let k = 0; k < n; k++) {
                    if(needle[k] !== haystack[i+k]) {
                        break;
                        isMatched = false;
                    }
                }     
                if(isMatched) {
                     // string matched
                    return i;

                }
            } 

                               // reduce the window
            // 1) calculate hash for ith char 2) remove that hash from total hash
            
            const firsCharIndex = getIndex(haystack[i]);
            
            const firCharhash = (needlePrimeLength * firsCharIndex) % PRIME;
            target = (target -firCharhash + PRIME ) % PRIME;
            
            i++;
        }
        j++;
    }
    
    return -1
};










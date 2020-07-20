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

var strStr = function(haystack, needle) {
    let needleSum = 0; let slidingHay = 0;
    for(i = 0; i < needle.length; i++){ 
        needleSum += needle.charCodeAt(i)
        slidingHay += haystack.charCodeAt(i)
    }

    
    for(i = 0; i < haystack.length-needle.length+1; i++){
        if(slidingHay == needleSum){ 
            if(needle.localeCompare(haystack.slice(i, i+needle.length)) != 0) continue
            return i
        }
        slidingHay += haystack.charCodeAt(i+needle.length) - haystack.charCodeAt(i)
    }
    return -1
}
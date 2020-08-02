//1433 https://leetcode.com/problems/check-if-a-string-can-break-another-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
    let s1Arr = new Array(26).fill(0);
    let s2Arr = new Array(26).fill(0);
    
    for(let i = 0 ; i < s1.length; i++) {
        s1Arr[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        s2Arr[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    let s1L = 0;
    let s2L = 0;
    let s1Break = true, s2Break = true;
    
    while(s1L < 26 || s2L < 26) {
        while(s1L < 26 && s1Arr[s1L] === 0) s1L++;
        while(s2L < 26 && s2Arr[s2L] === 0) s2L++;
        
        if(s1L > s2L) {
            s2Break = false;
        } else if(s2L > s1L) {
            s1Break = false;
        }
        s1Arr[s1L]--;
        s2Arr[s2L]--;
    }
    
    return s2Break || s1Break;
};
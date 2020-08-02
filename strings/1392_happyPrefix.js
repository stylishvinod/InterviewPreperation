// 1392 https://leetcode.com/problems/longest-happy-prefix/


/**
 * @param {string} s
 * @return {string}
 */

var longestPrefix = function(s) {
    let idx = 0;
    let i = 1;
    let arr = new Array(s.length).fill(0);
    
    while(i < s.length) {
        if(s[idx] === s[i]) {
            i++;
            idx++;
            arr[i-1] = idx;
        } else if(idx > 0) {
            idx = arr[idx-1];
        } else {
            i++
        }
    }
    
    if(arr[s.length-1] === 0) return '';
    
    return s.substring(0, arr[s.length-1]);
    
};
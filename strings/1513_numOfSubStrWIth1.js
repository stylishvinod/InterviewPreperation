// 1513 https://leetcode.com/problems/number-of-substrings-with-only-1s/

/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let count = 0, result = 0, mod = Math.pow(10, 9) + 7;
    
    for(let i = 0 ; i < s.length; i++) {
        if(s[i] === '1') {
            ++count;
        } else {
            count = 0;
        }
        result += count;
    }
    
    return result % mod;
};
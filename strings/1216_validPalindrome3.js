
// https://leetcode.com/problems/valid-palindrome-iii/


// recursion 

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function(s, k) {
    return recursion(s, k, 0, s.length-1, new Map());
};


const recursion = (s, k, i, j, map) => {
    
    if(i >= j) return true;
    
    const key = `${i}-${j}-${k}`;
    if(map.has(key)) return map.get(key);
    
    let match = false;
    if(s[i] === s[j]) {
        match = recursion(s, k, i+1, j-1, map);
    }
    
    let mismatch = false;
    if(k >0) {
        mismatch = recursion(s, k-1, i+1, j, map) || recursion(s, k-1, i, j-1, map);
    }
    
    const result = match || mismatch;
    map.set(key, result);
    return result;
    
}
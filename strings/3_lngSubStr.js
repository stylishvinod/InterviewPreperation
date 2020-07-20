//https://leetcode.com/problems/longest-substring-without-repeating-characters/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let i = 0 ;
    let j = 0;
    let len = s.length;
    let max = 0
    while(i < len && j < len) {
        if(!set.has(s[j])) {
            set.add(s[j]);
            max = Math.max(max, set.size);
            j++
        } else {
            set.delete(s[i]);
            i++;
        }
    }
    
    return max;
};
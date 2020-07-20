
//65 - https://leetcode.com/problems/valid-number/
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s =s.trim();
    let nums = [];
    for(let i = 0 ; i < 10; i++) {
        nums.push(i.toString());
    }
    let foundNumber = false;
    let foundE = false;
    let hasSeenDot = false;
    
    for(let i = 0 ; i < s.length; i++) {
        let char = s[i];
        
        if(nums.indexOf(char) > -1) {
            foundNumber = true;
        } else if(char === 'e') {
            if(!foundNumber || foundE) return false;
            
            foundE = true;
            foundNumber = false;
        } else if(char === '+' || char === '-') {
            if( i !== 0 && s[i-1] !== 'e') return false;
        } else if(char === '.') {
            if(foundE || hasSeenDot) return false;
            hasSeenDot = true
        } else {
            return false;
        }
    }
    
    return foundNumber;
};
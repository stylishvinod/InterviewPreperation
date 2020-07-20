// 1249: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let map = {
        ')' : '(',
    }
    let stack = [];
    let open = 0;
    let close = 0;
    
    // first pass check for close is equal to open, if close are greater than open
    // dont push that to stack.
    for(let i = 0 ; i < s.length; i++) {
        
        if(s[i] === ')'){
            if(close < open) {
                close++;
                stack.push(s[i])
            }
            
        } else if(s[i] === '('){
            open++;
            stack.push(s[i]);
        } else {
            stack.push(s[i]);
        }
    }
    
    // second pass
     open = 0; close = 0; let res = '';
    
    // extracting from stack means traverse string in reverse order
    // so in this case if open '(' are greter don't add to result
    while(stack.length) {
        let str = stack.pop();
        if(str === ')') {
            close++;
            res = str + res;
        } else if(str === '(') {
            if(open < close) {
                open++;
                res = str + res;
            }
        } else {
            res = str + res;
        }
    }
    return res;
};
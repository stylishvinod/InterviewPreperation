
// 150. https://leetcode.com/problems/evaluate-reverse-polish-notation/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if(tokens.length === 0) return 0;
  
    let stack = [];
    let operators  = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b),
  };
    for(const token of tokens) {
        if(operators[token]) {
            let val1 = stack.pop();
            let val2 = stack.pop();
            stack.push(operators[token](parseInt(val2), parseInt(val1)));
        } else {   
            stack.push(token);
         
        }
    }
    return stack.pop();
};
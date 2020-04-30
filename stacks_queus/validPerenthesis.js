//20. https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(const str of s) {
        if(stack.length === 0) {
            stack.push(str);
        } else {
            const topOfStack = stack[stack.length - 1];
           if(str === ']') {
               if(topOfStack !== '[') {
                   return false;
               } else {
                   stack.pop();
               }
           } else if(str === '}') {
               if(topOfStack !== '{') {
                   return false;
               } else {
                   stack.pop();
               }
           } else if(str === ')') {
               if(topOfStack !== '(') {
                   return false;
           }else {
               stack.pop()
           }
           
        }  else {
            stack.push(str)
        }
    }
    
}

    return stack.length === 0;
}

//  2nd approach

const usingStack = s => {
    if(!s) {
        return true;
    }
    const closing = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = [];
    for(let i=0; i <s.length; i++) {
        const chr = s[i];
        if(!closing[chr]) {
            // opening brackets then add into stack
            stack.push(chr);
        } else {
            // closing brackets, get top from stack
            const top = stack.pop();
            // top should be the opening bracket
            if(top !== closing[chr]) {
                return false;
            }
            
        }
    }
    // At the end; stack should be empty
    return stack.length === 0    
}
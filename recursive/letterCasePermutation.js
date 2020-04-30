//784 https://leetcode.com/problems/letter-case-permutation/


/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let result = [];
    helper(0, result, S.split(''));
    return result;
    
};

const helper = (n, result, choices) => {
      if(choices.length === n) return result.push(choices.join(''));
        if(isAlphabet(choices[n])) {
            // for lowercase letter
            choices[n] = choices[n].toLowerCase();
            helper(n+1, result, choices);
            
            // for uppercase letter
            choices[n] = choices[n].toUpperCase();
            helper(n+1, result, choices);
            
        } else {
            helper(n+1, result, choices);
        }
}


const isAlphabet = (a) => a.match(/[a-zA-Z]/);
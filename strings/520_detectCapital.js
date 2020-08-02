//520. https://leetcode.com/problems/detect-capital/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let all_caps = true;
    let first_cap = true;
    let last_lower = true;
    for(let i = 0; i < word.length; i++){
        let char = word.charCodeAt(i);
        if(char >= 65 && char <= 90){
            if(i > 0) last_lower = false;
        }
        else{
            if(i == 0) first_cap = false;
            all_caps = false;
        } 
    }
    
    if(all_caps || (first_cap && last_lower) || ( last_lower && !first_cap) ){
        return true
    }
    return false
};
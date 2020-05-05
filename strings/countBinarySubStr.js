//696:  https://leetcode.com/problems/count-binary-substrings/



/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let count = 1, sum = 0, prevCount = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i+1]){
            count += 1;
        }
        else{   
            // if prevCount present get the min value of prevCount and current count
            // so we can form those many combinations
            if(prevCount){
                sum += Math.min(prevCount, count)
            }
            prevCount = count;
            count = 1;
        }
    }
    return sum;    
};
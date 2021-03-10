
// Return the count of all substrings that can be formed uysing given 
// substring

var countSubStrings = function(S) {
    let count = 0;
    
    for(let i = 0 ; i < S.length; i++) {
        count += (i-0+1)
    }
    
    console.log({count})
    return count;
};
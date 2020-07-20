
//https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/



// approach 1
var countLetters = function(S) {
    let total = 0;
    let prev = '';
    let counter = 0;
    for (let i=0; i < S.length; i++) {
        const chr = S[i];
        if(prev !== chr) {
            counter = 1;
        } else {
            counter ++;
        }
        total += counter;   
        prev = chr;
    }
    return total;
};

// approach:2

var countLetters = function(S) {
    let i=0; let j=0;
    let result = [];
    while(i < S.length && j < S.length) {
        if(S[i] === S[j]) {
            result.push(S.substring(i, j+1))
            j++;
        } else {
            i++;
            j = i
        }
        if(j === S.length) {
            i++;
            j=i;
        }
        
    }
  //  console.log(result);
    return result.length;
};
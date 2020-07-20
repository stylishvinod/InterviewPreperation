

// https://leetcode.com/problems/longest-common-prefix/solution/

// using sorting and the compare first and last string char by char

let longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return '';
    }
    let arr = strs.sort();
    let i = 0;
    while (arr[0][i] && arr[arr.length - 1][i] && arr[0][i] === arr[arr.length - 1][i]) {
        i++;
    }
    return arr[0].slice(0, i);
};


// consider first string as reference and iterate through all string and compare
// char by char, if it didn't match return at that point.

var longestCommonPrefix = function(strs) {
    if(strs.length === 0 ) return '';
    
    for(let i=0; i < strs[0].length; i++) {
        let match = strs[0][i]
        for(let str of strs) {
            if(str[i] !== match) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
};

  // 
  var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
        let result = '';
    for(let i = 0 ; i < strs[0].length; i++) {
        let match = strs[0][i];
        if(strs.some(str => str[i] !== match)) {
            return result;
        } else {
            result +=match;
        }
    }
    return result;
};
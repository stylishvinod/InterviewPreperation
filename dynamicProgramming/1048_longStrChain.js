//1048 https://leetcode.com/problems/longest-string-chain/


/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    // sort it based on length
    words.sort((a, b) => a.length - b.length);
    
    let map = new Map(); // to store each node result;
    
    //iterate thourh each word and remove every letter from it and check
    // it there is match in hash
    // and form a DAG graph.. and get the child node length
    let max = 0;
    for(const word of words) {
        let longest = 0
        for(let j=0;j < word.length; j++) {
            let subString =  word.slice(0,j) + word.slice(j+1);
            longest = Math.max(longest, (map.get(subString) || 0) +1);
        }
        map.set(word, longest);
        max = Math.max(max, longest);
    }
    
    return max;
    
};
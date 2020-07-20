
//https://leetcode.com/problems/find-all-anagrams-in-a-string/

var findAnagrams = function(s, p) {
    if(s.length < p.length) return [];
    
    let pArry = new Array(26).fill(0);
    
    for(let i=0; i< p.length; i++) {
        let pos = p[i].charCodeAt(0) - 'a'.charCodeAt(0);
        pArry[pos] += 1;
    }
    
    //sliding window apprach
    let start = 0;
    let end = 0;
    
    let sArry = new Array(26).fill(0);
    
    const pLength = p.length;
    let count = 0;
    let result = [];
    
    while(end < s.length) {
        let pos = s[end].charCodeAt(0) - 'a'.charCodeAt(0);
        sArry[pos] += 1;
        ++count;
        if(count === pLength) {
            let pJoin = pArry.join('');
            if (pJoin === sArry.join('')) {
                result.push(start);
            }
              let pos1 = s[start].charCodeAt(0) - 'a'.charCodeAt(0);
            sArry[pos1] -= 1;
            start++;
            --count;
            
        }
        end++;
    }
    return result;
};
//916 https://leetcode.com/problems/word-subsets/

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
    let mapB = new Map();
    for(let i = 0 ; i < B.length; i++) {
        let str = B[i];
        let tmp = new Map();
        //logic is we can combine all strings in B and make a one
        // that combined string contain, length of letter that is
        //present more time in each individual string of B
        for(let j = 0 ; j< str.length; j++) {
            tmp.set(str[j], (tmp.get(str[j]) || 0) + 1);
            
            let val = Math.max(tmp.get(str[j]),  (mapB.get(str[j]) || 0));
            
            mapB.set(str[j], val);
        }
    }
    
    
    let result = [];
    for(let i = 0;i<A.length;i++) {
        let str = A[i];
        let mapA = new Map();
        
        for(let j=0; j< str.length; j++) {
            mapA.set(str[j], (mapA.get(str[j]) || 0)  + 1);
        }
        
        let subSet = true
        for(let val of mapB.keys()) {
            if((mapA.get(val) || 0 ) < mapB.get(val)) {
                subSet = false;
                break;
            }
        }
        
        if(subSet) {
            result.push(str);
        }
    }
    return result;
    
};
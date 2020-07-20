//1044 https://leetcode.com/problems/longest-duplicate-substring/
    // O(N * logN * logN)

/**
 * @param {string} S
 * @return {string}
 */

const prime = Math.pow(2, 32);
let roll = null;


const getIndex = (char) => {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

var longestDupSubstring = function(S) {
    let len = S.length;
    if(len ===0) return '';
    
    roll = new Array(len).fill(1);
    // fill roll array so we no need to calculate everytime;
    for(let i = 1; i < len ; i++) {
        roll[i] = (roll[i-1] * 26) % prime;
    }
    
    // Now do BS on the different size lenght strings
    
    let start = 1, end = len, result = '';
    
    while(start <= end) {
        let mid = start + Math.floor((end-start)/2);
        
        let index = search(S, mid);
        
        if(index === -1) {
            end = mid - 1;
        } else {
            start = mid + 1;
            //store result string
            if(result.length < (index + mid -1)) {
                result = S.substring(index, index+mid);
            }
        }
    }
    
        return result;
    
};

const search = (S, size) => {
    let map = new Map();
    
    let hash = 0
    
    // calculate inital hash
    for(let i = 0 ; i < size; i++) {
        let value = (roll[size-i-1] * getIndex(S[i])) % prime;
        hash = (hash + value) % prime;
    }
    
    map.set(hash, 0);
    
    // Roll the string to check the duplicate str
    
    for(let j = 1; j <= S.length-size; j++) {
        let prev = (roll[size-1] * getIndex(S[j-1])) % prime;
        let next = (roll[0] *getIndex(S[j + size - 1])) % prime;
        
        const remaining = ((hash - prev) * 26) % prime;
        hash = (remaining + next) % prime;
        
        if(map.has(hash)) {
            return j;
        } else {
            map.set(hash, j)
        }
    }
    return -1;
}

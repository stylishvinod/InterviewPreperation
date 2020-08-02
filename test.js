const PRIME = Math.pow(2,32);
const getIndex = chr => chr.charCodeAt(0) - 'a'.charCodeAt(0);
let roll = null;

const search = (S, size) => {
    const n = S.length;
    const map = new Map();
    
    let hash = 0;
    // calculate initial hash of given size
    for (let i=0; i < size; i++) {
        const value = (roll[size - i -1] * getIndex(S[i])) % PRIME;
        hash = (hash + value) % PRIME;
    }
    map.set(hash, 0); // add starting pointer for first hash
    
    // Rolling hash i.e. keep sliding window to right
    for (let j= 1; j < n - size + 1; j++) {
        const prev =  (roll[size-1] * getIndex(S[j-1])) % PRIME;
        const next = (roll[0] * getIndex(S[j + size -1])) % PRIME;
        const remaining = ((hash - prev) * 26) % PRIME ;
        // update existing hash
        hash =  (remaining + next) % PRIME
        
        // if already exist
        if(map.has(hash)) {
            return j;
        } 
        map.set(hash, j);
    }
    return -1;
}
/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function(S) {
    const n = S.length;
    if(n === 0) {
        return '';
    }
    roll = new Array(n).fill(1);
    for (let i=1; i < n; i++) {
        roll[i] = (26 * roll[i-1]) % PRIME;
    }
    let start = 1;
    let end = n;
    let ans = [];
    while(start <= end) {
        const mid = start + Math.floor((end - start)/2);
        // check if substring of size mid exist as duplicate
        let index = search(S, mid)
        if(index !== -1) {
            // try next higher size
            start = mid + 1;
        } else {
            // try lower size
            end = mid - 1;
        }
    }
    // get index
    const index = search(S, end);
    return S.substring(index, index + end)
};
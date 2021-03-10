
//https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/



// approach 1
var countLetters = function(S) {
    let count = 0;
    let left = 0;
    for(let i = 0 ; i < S.length; i++) {
     
        if(S[left] === S[i]) {
            count += (i-left+1);
        } else {
            left = i;
        }
        
    }
    
    return count;
};

// approach:2 - standard template

var countLetters = function(S) {
    /**
    - Use dynamic sliding window
    - Manage extra map to track distinct char found so far
    - on violation, reduce window size
    */
    let ans = 0;
    let i =0;
    const n = S.length;
    const map = new Map()
    for (let j=0; j < n ; j++) {
        const chr = S[j];
        map.set(chr, map.has(chr) ? map.get(chr) + 1: 1);
        
        // check for violation
        while(map.size > 1) {
            const firstChr = S[i];
            map.set(firstChr, map.get(firstChr) - 1);
            if(map.get(firstChr) === 0) {
                map.delete(firstChr);
            }
            i++;
        }
        const size = j - i + 1;
        ans += size;
        
    }
    
    return ans;
};

//https://leetcode.com/problems/find-all-anagrams-in-a-string/


var findAnagrams = function(s, p) {
    const map = new Map();
    for (const chr of p) {
        map.set(chr, map.has(chr) ? map.get(chr) + 1: 1);
    }
    const m = s.length;
    const n = p.length;
    const ans = [];
    let total = map.size;
    
    // apply fix sliding window concept
    for (let j = 0; j < m; j++) {
        const chr = s[j];
        if(map.has(chr)) {
            map.set(chr, map.get(chr) - 1);
            if(map.get(chr) === 0) {
                total--;                
            }
        }
        // check for ans range and slide window
        if(j + 1 - n >= 0) {
            // check if ans is found
            if(total === 0) {
                ans.push(j + 1 - n);
            }
            // reduce window size by 1 for next slide
            const lastChr = s[j + 1 - n];
            if(map.has(lastChr)) {
                map.set(lastChr, map.get(lastChr) + 1);
                if(map.get(lastChr) === 1) {
                    total++;                    
                }
            }
        }
    }
    return ans;
};


//approach:2

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
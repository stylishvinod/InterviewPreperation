
//76. https://leetcode.com/problems/minimum-window-substring/


var minWindow = function(s, t) {
    let left = 0, right = 0, substr = '';
    let map = new Map();
    for(let i =0 ; i < t.length ; i++) {
        if(map.has(t[i])) {
            map.set(t[i], map.get(t[i]) + 1);
        } else {
            map.set(t[i], 1);
        }
    }
    let missing = map.size;
    while(right <= s.length) {
        if(missing === 0) {
            if(map.has(s[left])) {
                map.set(s[left], map.get(s[left]) + 1)
            }
            if(map.get(s[left]) > 0) missing++;
            let tmp = s.substring(left, right);
            if(substr === '' || tmp.length < substr.length) {
                substr = tmp;
            }
            left++;
        } else {
            if(map.has(s[right])) {
                map.set(s[right] , map.get(s[right]) - 1);
            }
            if(map.get(s[right]) === 0) missing--;
            right++;
        }
    }
    return substr;
};

///  another approach

var minWindow = function(s, t) {
    // s = 'aaa'
    // t = 'aa'
    const map = new Map();
    const frequency = new Map();
    for (const chr of t) {
        map.set(chr, 0);
        if(!frequency.has(chr)) {
            frequency.set(chr, 1);
        } else {
            frequency.set(chr, frequency.get(chr) + 1);
        }
    }
    let missing = t.length; 
    let i=0;
    let j= 0;
    let min = '';
    while(i<s.length && j <= s.length) {
        // console.log({i, j, missing, map, frequency })
        // if missing is zero then possible answer
        if (missing === 0) {
            const ans = s.substring(i, j);
            if(min === '' || ans.length < min.length) {
                min = ans;
            }
            // Time to reduce window from left
            const chr = s[i];
            if(map.has(chr)) {
                // decrese count
                const prev = map.get(chr);
                map.set(chr, prev - 1);
                if(prev <= frequency.get(chr)) {
                    missing++;
                }
            }
            i++;
            
        } else {
            const chr = s[j];
            if(map.has(chr)) {
                // increment finding
                const prev = map.get(chr);
                map.set(chr, prev + 1);
                // if became 0 to non zero 
                if (prev <= frequency.get(chr) - 1) {
                  missing--;  
                }
            }
            j++;
        }

    }
    return min;
};
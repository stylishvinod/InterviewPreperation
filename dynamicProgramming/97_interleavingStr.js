// https://leetcode.com/problems/interleaving-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const len1 = s1.length;
    const len2 = s2.length;
    const len3 = s3.length;
    
    if(len3 !== (len1 + len2)) return false;
    
    const map = new Map();
    return helper(s1, s2, s3, len1, len2, len3, 0, 0 ,0, map);
};

const helper = (s1, s2, s3, l1, l2, l3, p1, p2, p3, map) => {
    // base case
    if(p3 === l3) {
        // check if s1 and s2 are scanned completelt
        if(l1 === p1 && l2 === p2) {
            return true;
        } else {
            return false;
        }
    }
    const key= `${p1}-${p2}-${p3}`;
    
    if(map.has(key)) return map.get(key);
    let mapVal = false
    // ifp1 ==l1, we need to go with p2 string comparision
    if(p1 === l1) {
        mapVal = s2[p2] === s3[p3] ? helper(s1, s2, s3, l1, l2, l3, p1, p2+1, p3+1, map): false;
        map.set(key, mapVal);
        return mapVal
    }
    
    if(p2 === l2) {
          mapVal = s1[p1] === s3[p3] ? helper(s1, s2, s3, l1, l2, l3, p1+1, p2, p3+1, map): false;
        map.set(key, mapVal);
        return mapVal
    }
    
    let s1Val = false, s2Val = false;
    
    if(s1[p1] === s3[p3]) {
        s1Val = helper(s1, s2, s3, l1, l2, l3, p1+1, p2, p3+1, map);
    }
    
    if(s2[p2] === s3[p3]) {
        s2Val = helper(s1, s2, s3, l1, l2, l3, p1, p2+1, p3+1, map);
    }
    
    map.set(key, s1Val || s2Val);
    return map.get(key);
}
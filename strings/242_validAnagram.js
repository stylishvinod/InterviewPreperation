//242: https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], 1);
        } else {
            map.set(s[i], map.get(s[i]) + 1)
        }
    }


    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            let val = map.get(t[i]);
            --val;
            if (val === 0) {
                map.delete(t[i])
            } else {

                map.set(t[i], val);
            }
        } else {
            return false;
        }
    }
    return true;
};
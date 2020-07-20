
// https://leetcode.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let s1Len = s1.length, s2Len = s2.length;
    if (s2Len < s1Len) return false;

    let s1Arr = new Array(26).fill(0);
    let s2Arr = new Array(26).fill(0);
    for (let i = 0; i < s1Len; i++) {
        s1Arr[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;

    }

    let start = 0;
    let end = 0;

    while (end < s2Len) {
        s2Arr[s2[end].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;

        if (end >= s1Len - 1) {
            if (s1Arr.join('') === s2Arr.join('')) {
                return true;
            }
            s2Arr[s2[start].charCodeAt(0) - 'a'.charCodeAt(0)] -= 1;
            start++;

        }

        end++;

    }
    return false;
};
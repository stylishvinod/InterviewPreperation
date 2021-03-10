// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length - 1;
    let targetValue = getCharCodeVal(target)
    while(left <= right) {
        let mid = left + Math.floor((right-left)/2);
        let midVal = getCharCodeVal(letters[mid])
        
        if(midVal <= targetValue) {
            left = mid + 1
        } else {
            right = mid - 1;
        }
        
    }
   // return (left === letters.length) ? letters[0]: letters[left];
   return letters[left % letters.length];
};
    
    const getCharCodeVal = (val) => {
        return val.charCodeAt(0) - 'a'.charCodeAt(0);
    }
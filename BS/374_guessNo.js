// https://leetcode.com/problems/guess-number-higher-or-lower/


/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n;
    
    
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        let result = guess(mid);
    
        if(result === 0) {
            return mid;
        } else if(result === 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
};
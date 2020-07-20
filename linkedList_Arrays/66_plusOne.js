

// 66 - https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let reminder = 1;
    let pos = digits.length - 1;
    while(reminder && pos >= 0) {
        let result = digits[pos] + reminder;
        digits[pos] = result%10;
        reminder = Math.floor(result/10);
        pos--;
    }
    
    if(reminder) {
        digits.unshift(reminder);
    }
    return digits;
};
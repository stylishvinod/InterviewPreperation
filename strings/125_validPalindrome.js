
//125 - https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function(s) {
    s = s.replace(/[^0-9A-Za-z]/gi, '').toLowerCase();
    console.log({s})
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
    
        if(s[left] !== s[right]) {
            return false;
        } else {
            left++;
            right--;   
        }
    }
    return true;
};
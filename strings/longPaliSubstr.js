/// 5. https://leetcode.com/problems/longest-palindromic-substring/


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s || s.length ==0 ) return '';
    let start = 0;
    let end = 0;
    for(let i= 0; i<s.length; i++) {
        // length of odd string
        let len1 = lengthOfPalindrome(s, i, i);
        // length of even string
        let len2 = lengthOfPalindrome(s, i, i + 1);
        //get max of both even and odd;
        let maxLen = Math.max(len1, len2);
        if(maxLen > (end-start)) {
            start = i - Math.floor((maxLen - 1) /2);
            end = i + Math.floor(maxLen/2)
        }
    }
     return s.substring(start, end+1);
    
};


const lengthOfPalindrome = (s, left, right) => {
    while(left >=0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    // [left+1, right-1]  so length is (right-1-left-1+1)
    return right - left - 1
    
}


///  using DP approach

var longestPalindrome = function(s) {
    let dp = [];
    let result = "";
    for (let end=0;end<s.length;end++) { 
        if (!dp[end]) dp[end]=[];
        for (let start=0;start<=end;start++) {
            if (start == end) {
                dp[end][start] = true;
            } else if (end-start>1) {
                dp[end][start] = s[end] == s[start] && dp[end-1][start+1];
            } else {
                dp[end][start] = s[end] == s[start]
            }

            if (dp[end][start]) {
                if ((end-start + 1) > result.length) {
                    result = s.substring(start, end+1);
                }
            }
        }
    }
    return result;
}
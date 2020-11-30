

// https://leetcode.com/problems/shortest-common-supersequence/


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    
    const dp = new Array(len1+1).fill(0).map(a => new Array(len2+1).fill(0));

    
    for(let i = 1; i <= len1; i++) {
        for(let j = 1; j<= len2; j++) {
            if(str1[i-1] === str2[j-1]) {
                dp[i][j] = dp[i-1][j-1] +1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
            }
        }
    }

    
    //. part:2
    let i = len1, j = len2;
    let result = [];
    
    while(i>0 && j >0) {
        if(dp[i][j] === dp[i-1][j]) {
            result.push(str1[i-1]);
            i--;
        } else if(dp[i][j] === dp[i][j-1]) {
            result.push(str2[j-1])
            j--;
        } else {
            result.push(str1[i-1]);
            i--;
            j--;
        }
        
    }
    
    while(i>0) {
        result.push(str1[i-1]);
        i--;
    }
    
    while(j>0) {
        result.push(str2[j-1])
        j--
    }
          
    return result.reverse().join('')
    
};
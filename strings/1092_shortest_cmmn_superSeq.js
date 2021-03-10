const usingCommonSupersequence = (str1, str2) => {
    const m = str1.length;
    const n = str2.length;
    
    const dp = new Array(m+1).fill(0).map(a => new Array(n+1).fill(0));
    
    // if str1 is empty
    for (let j=0; j < n + 1; j++) {
        dp[0][j] = j;
    }
    // if str2 is empty
    for (let i=0; i < m + 1; i++) {
        dp[i][0] = i;
    }
    
    for (let i=1; i < m + 1; i++) {
        for (let j=1; j < n + 1; j++) {
            if(str1[i-1] === str2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1]
            } else {
                dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1]);
            }
        }
    }

    const output = [];
    let i = m;
    let j = n;
    while(i > 0 && j > 0) {
        if(str1[i-1] === str2[j-1]) {
            output.push(str1[i-1]);
            i--;
            j--;
        } else {
            if(dp[i-1][j] < dp[i][j-1]) {
                output.push(str1[i-1]);
                i--;
            } else {
                output.push(str2[j-1]);
                j--;
            }
        }
    }
    // copy the left over
    while(i > 0) {
        output.push(str1[i-1]);
        i--;
    }
    while(j > 0) {
        output.push(str2[j-1]);
        j--;
    }    
    return output.reverse().join('');
}
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    return usingCommonSupersequence(str1, str2);
};
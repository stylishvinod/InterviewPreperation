

// https://leetcode.com/problems/edit-distance/


/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {

    let m = word1.length;
    let n = word2.length;

    let dp = new Array(2).fill(0).map(a => new Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {

            if (i === 0) {
                dp[i % 2][j] = j;
            } else if (j === 0) {
                dp[i % 2][j] = i;
            } else if (word1[i - 1] === word2[j - 1]) {
                dp[i % 2][j] = dp[(i - 1) % 2][(j - 1)]
            } else {
                dp[i % 2][j] = 1 + Math.min(
                    dp[(i - 1) % 2][(j - 1)], // replace
                    dp[i % 2][(j - 1)],  // insert
                    dp[(i - 1) % 2][j]  // delete
                )
            }

        }
    }

    return dp[m % 2][n];
};
//https://leetcode.com/problems/word-break/submissions/


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const wordSet = wordDict.reduce((map, car) => {
        map[car] = 1;
        return map;
    }, {});;
    return wordBreakHelper(s, wordSet);
};

const wordBreakHelper = (s, wordSet) => {
    let table = new Array(s.length + 1).fill(false);
    table[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            let word = s.slice(j, i);
            table[i] = table[i] || table[j] && wordSet.hasOwnProperty(word);
        }
    }
    return table[s.length]
}


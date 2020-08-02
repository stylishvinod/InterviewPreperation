//1525  https://leetcode.com/problems/number-of-good-ways-to-split-a-string/

/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
  let ss = new Set();
  let pre = [];
  let suf = [];
  let ans = 0;
    // calculate unique ele from left
  for (let i = 0; i < s.length; i += 1) {
    ss.add(s[i]);
    pre[i] = ss.size;
  }
  ss.clear();
    // calculate unique ele from right
  for (let i = s.length - 1; i >= 0; i -= 1) {
    ss.add(s[i]);
    suf[i] = ss.size;
  }

    // compare left and right counts
  for (let i = 0; i < s.length; i += 1) {
    if (pre[i] === suf[i + 1]) ans += 1;
  }
  return ans;
};
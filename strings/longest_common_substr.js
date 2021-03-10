// Find length of longest common substring


//Recursive

const findLCSLength = function(s1, s2) {
    function findLCSLengthRecursive(s1, s2, i1, i2, count) {
      if (i1 === s1.length || i2 === s2.length) return count;
  
      if (s1[i1] === s2[i2]) {
        count = findLCSLengthRecursive(s1, s2, i1 + 1, i2 + 1, count + 1);
      }
  
      const c1 = findLCSLengthRecursive(s1, s2, i1, i2 + 1, 0);
      const c2 = findLCSLengthRecursive(s1, s2, i1 + 1, i2, 0);
  
      return Math.max(count, Math.max(c1, c2));
    }
    return findLCSLengthRecursive(s1, s2, 0, 0, 0);
  };


  //DP::

  const findLCSLength = function(s1, s2) {
    const dp = Array(s1.length + 1)
      .fill(0)
      .map(() => Array(s2.length + 1).fill(0));
  
    let maxLength = 0;
    for (let i = 1; i <= s1.length; i++) {
      for (let j = 1; j <= s2.length; j++) {
        if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
          dp[i][j] = 1 + dp[i - 1][j - 1];
          maxLength = Math.max(maxLength, dp[i][j]);
        }
      }
    }
    return maxLength;
  };
  
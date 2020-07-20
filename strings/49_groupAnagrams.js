//49: https://leetcode.com/problems/group-anagrams/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 // O(Nklogk)
var groupAnagrams = function(strs) {
    let map = new Map();
    strs.forEach( str => {
        let tmp = str.split('').sort().join('');
        if(map.has(tmp)) {
            map.set(tmp, [...map.get(tmp), str]);
        } else {
            map.set(tmp, [str]);
        }
    })
    
    return [...map.values()];
};

// O(Nk)
var groupAnagrams = function (strs) {
    const map = {};
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    strs.forEach(str => {
      let prod = str.split("").reduce((r, c) => r * primes[c.charCodeAt() - 97], 1);
      map[prod] ? map[prod].push(str) : map[prod] = [str];
    });
    return Object.values(map);
  };

  // O(Nk)

  const groupAnagrams = strs => {
    let anagrams = {}
    for(const str of strs){
        let count = charCount(str)
        anagrams[count] ? anagrams[count].push(str) : anagrams[count] = [str]
    }
    return Object.values(anagrams)
};
const charCount = str => {
    let output = Array(26).fill(0)
    for(let i = 0; i < str.length; i++)output[str.charCodeAt(i)-97]++
    return output.join``
}
// 3.. https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let i = 0;
     let j = 0;
    let found = 0;
    while( i < s.length && j < s.length) {
      //  console.log("map.has(j)", map.has(j));
        if(!map.has(s[j])) {
            map.set(s[j], 1)
            j++;
            
        } else {    
        //    console.log("map.is", map);
         //   console.log("map.length", map.size);
            found = Math.max(found, map.size);
         //   console.log(s[j]);
            i++;
            j = i
            map.clear();
          //  console.log("map is", map);
        }
    }
    
    return Math.max(found, map.size);
};
//https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

var maxDepth = function(root) {
    if(!root) return null;
  let q = [root];
  let result = [];
  let level = 0;
  while(q.length) {
      let n = q.length;
      level++;
      for(let i=0; i<n; i++) {
          let node = q.shift();
          
          node.children.forEach(child => q.push(child))
      }
  }
  return level;
};
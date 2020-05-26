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


// iterative

var maxDepth = function(root) {
    if (root == null) return 0
    
    let i = 0
    for (let node of root.children) {
        i = Math.max(i, maxDepth(node))
    }
    
    return i + 1
}
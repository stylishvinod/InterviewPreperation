//https://leetcode.com/problems/path-sum/

var hasPathSum = function(root, sum) {
    if(!root)  return false;
 return helper(root, sum, 0);
};


function helper(node, sum, pathSum) {
  if(!node.left && !node.right) {
      if (pathSum + node.val ===sum) {
          return true;
      }
      return false;
  };
  let left = false;
  if(node.left) {
      
     left =  helper(node.left, sum, pathSum + node.val);
  }
  let right = false;
  if(node.right) {
     right = helper(node.right, sum, pathSum + node.val);
  }
  
  
  return left || right;
}
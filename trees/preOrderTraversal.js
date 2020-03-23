


// iterative
var preorderTraversal = function(root) {
    let curr = root,  res = [], stack = [];
   while (curr || stack.length) {
       while (curr) {
           res.push(curr.val);
           let value = {val: curr.val, left: null, right: curr.right};
           stack.push(value);
           curr = curr.left;
       }
       curr = stack.pop();
       
       curr = curr.right;
   }
   return res;
};


//recursive

var preorderTraversal = function(root) {

    let result = [];
    
    helper(root, result);
    return result;
    
}
function helper(node, result) {
    if(!node) return root;
    result.push(node.val);
    helper(node.left, result);
    helper(node.right, result);
}
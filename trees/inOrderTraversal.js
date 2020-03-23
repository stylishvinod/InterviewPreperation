
//https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/


// iterative
const inorderTraversal = (root) => {
    let curr = root,  res = [], stack = [];
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
};


//recursive
const inorderTraversal = (root) => {
    const res = [];
    traverse(root);
    return res;
    
    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        res.push(node.val);
        traverse(node.right);
    }
};
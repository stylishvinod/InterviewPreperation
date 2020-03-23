//https://leetcode.com/problems/insert-into-a-binary-search-tree/

// Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

// Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
var insertIntoBST = function(root, val) {
    if(!root) return {val, left:null, right:null};
    let current = root;
    let prev = null;
    while(current !== null) {   
        if(val <  current.val) {
            prev = current;
            current = current.left;
        } else if(val > current.val) {
            prev = current;
            current = current.right;
        } 
        
    }

    if(val < prev.val ) {
        prev.left = new TreeNode(val);
    } else {
        prev.right = new TreeNode(val);
    }
    return root;
};




//Method::2

var insertIntoBST = function(root, val) {
    let curr = root;
    while (curr.val !== val) {
        if (curr.val < val) {
            if (!curr.right) {
                curr.right = new TreeNode(val);
            }
            curr = curr.right;
        } else {
            if (!curr.left) {
                curr.left = new TreeNode(val);
            }
            curr = curr.left;
        }
    } 
    return root;
};


// recursive

var insertIntoBST = function(root, val) {
    insert(root, val);
    return root;
    
    function insert(node) {
        if (node.val < val) {
            node.right ? insert(node.right) : node.right = new TreeNode(val);
        } else {
            node.left ? insert(node.left) : node.left = new TreeNode(val);
        }
    }
};
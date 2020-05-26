// 285. https://leetcode.com/problems/inorder-successor-in-bst/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    if(!root) return null;
    let curr = root;
    if(p.right) {
        curr = p.right;
        
        while(curr.left) {
            curr = curr.left;
        }
        return curr;
    }
    
    
    let ancestor = null;
    curr = root;
    while(curr.val !== p.val) {
        if(curr.val < p.val) {
            curr = curr.right;
        } else {
            ancestor = curr;
            curr = curr.left;
        }
    }
    
    return ancestor;
};
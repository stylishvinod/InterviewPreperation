//938 - https://leetcode.com/problems/range-sum-of-bst/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    
    let curr = root;
    let sum = 0;
    let stack = [];
    while(curr || stack.length) {
        
        while(curr) {
            stack.push(curr);
            curr = curr.left;
        }
        
        curr = stack.pop();
        if(curr.val > R) return sum;
        if(curr.val >=L && curr.val <= R) sum += curr.val;        
        curr = curr.right;
        
        
    }
    return sum;
};

//270. https://leetcode.com/problems/closest-binary-search-tree-value/


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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let curr = root;
    let diff = null;
    let result = null;
    
    while(curr) {
        let difference = Math.abs(curr.val - target);
        if(difference < diff || diff === null) {
            diff = difference;
            result = curr.val;
        }
      
        curr = curr.val < target? curr.right : curr.left;
    }
    return result;
};
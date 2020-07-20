//337: https://leetcode.com/problems/house-robber-iii/


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
 * @return {number}
 */
var rob = function(root) {
    return Math.max(...robHelper(root))
};


const robHelper = (node) => {
    if(!node) return [0, 0];
    
    let [leftRob, notLeftRob] = robHelper(node.left);
    let [rightRob, notRightRob] = robHelper(node.right);
    
    const robNode = node.val + notLeftRob + notRightRob;
    const notRob = Math.max(leftRob + rightRob, rightRob + notLeftRob, leftRob + notRightRob, notLeftRob + notRightRob);
    
    return [robNode, notRob];
}


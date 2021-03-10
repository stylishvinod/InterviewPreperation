

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
    return Math.max(...dfs(root))
};

const dfs = (node) => {
    if(!node) return [0, 0];
    
    const [robLeft, dontRobLeft] = dfs(node.left);
    const [robRight, dontRobRight] = dfs(node.right);
    
    const choose = node.val + dontRobLeft + dontRobRight;
    const dontChoose = Math.max(robLeft+robRight, robLeft+dontRobRight, robRight+dontRobLeft, dontRobLeft+dontRobRight);
    
    return [choose, dontChoose]
}
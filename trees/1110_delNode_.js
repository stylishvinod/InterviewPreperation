//1110 https://leetcode.com/problems/delete-nodes-and-return-forest/


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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    let result = [];
    const deleteSet = new Set(to_delete);
    
    root = dfs(result, root, deleteSet);
    if(root) result.push(root);
    return result;
    
};

const dfs = (result, node, deleteSet) => {
    if(!node) return null;
    console.log({node});
    let left = dfs(result, node.left, deleteSet);
    console.log({left})
    let right = dfs(result, node.right, deleteSet);
    console.log({right})
    if(deleteSet.has(node.val)) {
        if(left) {
            result.push(left);
        }
        if(right) {
            result.push(right);
        }
        
        return null;
        
    }
    node.left = left;
        node.right = right;
    return node;
}

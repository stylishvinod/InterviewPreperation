


//113. https://leetcode.com/problems/path-sum-ii/


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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(!root) return [];
    let result = [];
    helper(root, sum, [], result, 0)
    return result;
};


const helper = (node, sum, currPath, result, pathSum) => {
    if(!node.left && !node.right) {
        if(sum === pathSum + node.val) {
           
            return result.push([...currPath, node.val]);
        }
    }

    
    
    currPath.push(node.val)
    let tmpPathSum = pathSum + node.val;
    if(node.left) helper(node.left, sum, currPath, result, tmpPathSum);
    if(node.right) helper(node.right, sum, currPath, result, tmpPathSum);
    currPath.pop();
    return;
}
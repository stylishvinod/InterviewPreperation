//230: https://leetcode.com/problems/kth-smallest-element-in-a-bst/submissions/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let result = [];
    helper(root, result);

    return result[k - 1].val;
};

function helper(node, result) {
    if (!node) return node;
    helper(node.left, result);
    result.push(node);
    helper(node.right, result);

}


// iterative approach
var kthSmallest = function(root, k) {
    let i = 0;
    const stack = [root];
    // initilze curr with root
    let curr = root;
    // process items in stack
    while(curr || stack.length > 0) {
        // Scan all left branch
        while(curr) {
            stack.push(curr);
            curr = curr.left;
        }
        // Get top from stack
        const node = stack.pop();
        // process node
        i++;
        if(i === k) {
            return node.val;
        }
        // If there is right subtree then scan it
        if(node.right) {
            curr = node.right;
        }
    }
}; 
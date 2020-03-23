//https://leetcode.com/problems/binary-tree-postorder-traversal/


//recursive

var postorderTraversal = function (root) {

    let result = [];

    helper(root, result);
    return result;

}
function helper(node, result) {
    if (!node) return root;
    helper(node.left, result);
    helper(node.right, result);
    result.push(node.val);

}

//Iterative
var postorderTraversal = function (root) {
    let stack = [], result = [], current = root;

    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        const popped = stack.pop();
        if (popped.right) {
            stack.push({ val: popped.val }); // push back without right child
            current = popped.right;
        } else {
            result.push(popped.val);
        }
    }
    return result;
};

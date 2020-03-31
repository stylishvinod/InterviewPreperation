//https://leetcode.com/problems/validate-binary-search-tree/



var isValidBST = function (root) {
    if (!root) return true;
    let curr = root, res = [], stack = [];
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();

        if (res.length === 0) {
            res.push(curr.val);
        } else if (res[res.length - 1] < curr.val) {
            res.push(curr.val);
        } else {
            return false;
        }
        curr = curr.right;
    }
    return true;
};
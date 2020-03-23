//N-ary Tree Postorder Traversal
//https://leetcode.com/problems/n-ary-tree-postorder-traversal/


var postorder = function (root) {
    if (!root) return [];
    let st = [root];
    let result = [];
    while (st.length) {
        let value = st.pop();
        result.unshift(value);
        value.children.forEach(child => st.push(child));
    }
    return result;
};
//https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/


var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let q = [root];
    let result = [];
    let leftToRight = true;
    while(q.length > 0) {
        let n = q.length;
        let tempArr = [];
        for(let i = 0; i < n; i++) {
            let node = q.shift();
            if (leftToRight) {
            tempArr.push(node.val);
            } else {
                tempArr.unshift(node.val);
            }
            if(node.left) {
                q.push(node.left);
            }
            if(node.right) {
                q.push(node.right);
            }
        }
        leftToRight = !leftToRight;
        result.push(tempArr)
    }
    return result;
};
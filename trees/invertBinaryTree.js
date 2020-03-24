
//https://leetcode.com/problems/invert-binary-tree/

var invertTree = function(root) {
    if(!root) return root;
    let q = [root];
    while(q.length) {
        let n = q.length;
        for(let i =0; i<n; i++) {
            let node = q.shift();
            let temp = null; let tmp2 =null;
            if (node.left) {
                 temp = node.left;
                q.push(node.left);
            }
            if(node.right) {
                 tmp2 = node.right
                q.push(node.right);
            }
            node.left = tmp2;
            node.right = temp;
            
            
            
        }
    }
    return root;
};
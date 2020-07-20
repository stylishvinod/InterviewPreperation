//987 - https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/

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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    if(!root) return [];
    let qu = [[root, 0]];
    let minCol = 0;
    let maxCol = 0;
    let map = new Map();
    let level = 0;
    while(qu.length) {
        let len = qu.length;
        
        for(let i = 0; i < len; i++) {
        let [node, pos] = qu.shift();
        
        if(map.has(pos)) {
            map.set(pos, [...map.get(pos), [node.val, level]]);
        } else {
            map.set(pos, [[node.val, level]]);
        }
        
        minCol = Math.min(minCol, pos);
        maxCol = Math.max(maxCol, pos);
        
        if(node.left) qu.push([node.left, pos -1]);
        if(node.right) qu.push([node.right, pos + 1]);
        }
        ++level;
    }
                  
   let result = [];
    
    for(let i = minCol; i<=maxCol; i++) {
            result.push(map.get(i).sort((a,b) => {if(a[1] === b[1]) {
                return a[0]-b[0];
            }else {
              return  a[1]-b[1];
            }} ).map(k => k[0]));
        }
    return result;
};
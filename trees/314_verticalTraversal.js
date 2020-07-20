// 314: https://leetcode.com/problems/binary-tree-vertical-order-traversal/

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

// try bfs

var verticalOrder = function(root) {
    if(!root) return [];
    let map = new Map();
    let qu = [[root,0]]
    let minCol = 0 , maxCol = 0;
    while(qu.length) {
        let [node, count] = qu.shift();
        
         if(map.has(count)) {
        map.set(count, [...map.get(count), node.val])
    } else {
        map.set(count, [node.val])
    }
        minCol = Math.min(minCol, count);
        maxCol = Math.max(maxCol, count);
        if(node.left) qu.push([node.left, count-1]);
        if(node.right) qu.push([node.right, count+1]);
    }
     let result = [];
    for(let i = minCol; i <= maxCol; i++) {
        result.push(map.get(i));
        
    }
    
    return result;
};





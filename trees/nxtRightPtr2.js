// 117. https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/



/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root;
    
    let leftMost, prev, current;
    leftMost = root
    while(leftMost) {
        current = leftMost;
        leftMost = null;
        prev = null;
        while(current) {
           [prev, leftMost] = connectToPrevious(current.left, prev, leftMost);
            [prev, leftMost] = connectToPrevious(current.right, prev, leftMost);
            current = current.next;      
        }
    }
    return root;  
};


    
    
    function connectToPrevious(node, prev, leftMost) {
        if(!node) return [prev, leftMost] ;
    
        if(prev) {
            prev.next = node;
        } else {
            leftMost = node;
        }
        
        return [node, leftMost] ;
    }




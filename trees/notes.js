/*
BST (binary search tree)
h = log(n)

BST are called
 ->  Map
 -> Assosiative array
 -> symbol table

 operations on BST::
 -> insert
 -> delete
    a) current node is leaf
    b) current node has one node
    c) current node has both left and right nodes
 -> search
 -> find min and max
 -> successor and predecessor


Traversal of tree::
-> it means a systematic way of visiting all nodes of a tree.
a) BFS (breadth first search) or level order traversal
    -> Time complexity O(n)
    -> Space complexity O(n)
b) DFS (depth frist search)
    -> Pre order
    -> In order
    -> post order

*/


//BFS template
var levelOrder = function(root) {
    if(!root) return [];
    let q = [root];
    let result = [];
    while(q.length > 0) {
        let n = q.length;
        let tempArr = [];
        for(let i = 0; i < n; i++) {
            let node = q.shift();
            tempArr.push(node.val);
            if(node.left) {
                q.push(node.left);
            }
            if(node.right) {
                q.push(node.right);
            }
        }
        result.push(tempArr)
    }
    return result;
};


//  DFS template
function DFS(root) {
    if (!root) return;
    helper(node);
}

function helper(node) {
    if (!node.left && !node.right) return [];

    if (node.left) {

        helper(node.left);
    }
    if (node.righ) {
        helper(node.right);
    }

}

/*  Problems
BFS::
https://leetcode.com/problems/binary-tree-level-order-traversal/ --- done
 https://leetcode.com/problems/binary-tree-right-side-view  -- done
 https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal -- done
 https://leetcode.com/problems/n-ary-tree-level-order-traversal -- done
 https://leetcode.com/problems/binary-tree-level-order-traversal-ii -- done
https://leetcode.com/problems/populating-next-right-pointers-in-each-node/ -- done
DFS::
 https://leetcode.com/problems/path-sum/ -- done
https://leetcode.com/problems/path-sum-ii/ -- done
 https://leetcode.com/problems/path-sum-iii/ - diffucult


*/

/*
# Add into BST
https://leetcode.com/problems/insert-into-a-binary-search-tree/ -- done
https://leetcode.com/problems/search-in-a-binary-search-tree/ -- done
https://leetcode.com/problems/closest-binary-search-tree-value/  -- done
# Get max from BST
https://leetcode.com/problems/kth-smallest-element-in-a-bst/ -- done
# Successor 
 285. https://leetcode.com/problems/inorder-successor-in-bst/ -- done
https://leetcode.com/problems/inorder-successor-in-bst-ii/  -- locked
# Delete node
https://leetcode.com/problems/delete-node-in-a-bst/ -- done`
# Traversal
https://leetcode.com/problems/binary-tree-postorder-traversal/
https://leetcode.com/problems/n-ary-tree-postorder-traversal/
https://leetcode.com/problems/binary-tree-inorder-traversal/
https://leetcode.com/problems/binary-tree-preorder-traversal/
# BST Reconstruction
https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
# BFS
https://leetcode.com/problems/binary-tree-level-order-traversal
https://leetcode.com/problems/binary-tree-level-order-traversal-ii
https://leetcode.com/problems/n-ary-tree-level-order-traversal
https://leetcode.com/problems/binary-tree-right-side-view
https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal
(Extra) https://leetcode.com/problems/average-of-levels-in-binary-tree/
https://leetcode.com/problems/minimum-depth-of-binary-tree/
https://leetcode.com/problems/maximum-depth-of-binary-tree/
https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
# DFS
## Top-down
https://leetcode.com/problems/path-sum/
https://leetcode.com/problems/path-sum-ii/
(Extra) https://leetcode.com/problems/path-sum-iii/
https://leetcode.com/problems/invert-binary-tree/
## Bottom-up
https://leetcode.com/problems/diameter-of-binary-tree/
https://leetcode.com/problems/count-univalue-subtrees/
(Extra) https://leetcode.com/problems/validate-binary-search-tree/
## Boundary Walk DFS
https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
(Extra) https://leetcode.com/problems/kth-smallest-element-in-a-bst/
## (Extra) Iterative stack DFS
https://leetcode.com/problems/binary-tree-preorder-traversal/
https://leetcode.com/problems/binary-tree-inorder-traversal
https://leetcode.com/problems/binary-tree-postorder-traversal
https://leetcode.com/problems/binary-search-tree-iterator
# Tree Construction (Top-down)
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal
(Extra) https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
https://leetcode.com/problems/middle-of-the-linked-list/





Problem Types::  
----------------

1) BFS with inditialing a Queue and traverse level by level.
2) BFS without any extra space, 3 pointer approach.(neext extra pointer in node "next")
3) BFS with BST and non BST traversal with extra space 


DFS::
** it is recursive approach. every time we have call heper for left & right nodes.
1) Path sum - 112, 113
*/
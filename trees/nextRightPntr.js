
//116. https://leetcode.com/problems/populating-next-right-pointers-in-each-node/   

var connect = function(root) {
    if(!root) return root;
    connectNext(root);
    return root;
    
};


function connectNext(root) {
    if(!root) return;
    
    if(root.left) {
        root.left.next = root.right;
        
    }
    
    if(root.right && root.next) {
        root.right.next = root.next.left
    } 
    
    connectNext(root.left);
    connectNext(root.right);
}
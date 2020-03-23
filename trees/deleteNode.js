const successor = node => {
    node = node.right;
    while (node.left) {
        node = node.left;
    }
    return node.val;
}

var deleteNode = function(root, key) {
    if(!root) return root;
    
    let curr = root;
    let prev = root;
    let child = null;
    while(!curr) {
        if(key === curr.val) {
            if (!curr.left && !curr.right) {
                if(prev.left.val === key) {
                    prev.left = null;
                } else {
                    prev.right = null;
                }
            } else if(curr.left && curr.right) {
                    
                      
                      }
            
        } else if(key < curr.val) {
            prev = curr;
         curr = curr.left;   
        } else {
                prev = curr;
         curr = curr.right;  
        }
        
        
        
    }
    return root;
};
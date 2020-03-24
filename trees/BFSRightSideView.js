//https://leetcode.com/problems/binary-tree-right-side-view/

var rightSideView = function(root) {
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
       
       result.push(tempArr[tempArr.length - 1])
   }
   return result;
};
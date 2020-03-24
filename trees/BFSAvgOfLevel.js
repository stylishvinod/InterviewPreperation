//https://leetcode.com/problems/average-of-levels-in-binary-tree/submissions/

var averageOfLevels = function(root) {
    if(!root) return [];
    let q = [root];
    let result = [];
    while(q.length) {
        let sum = 0;
        let count = 0
        const n = q.length;
        for(let i= 0 ; i< n;i++) {
            const node = q.shift();
            sum += node.val;
            count++;
            if(node.left) {
                q.push(node.left);
            }
            
            if(node.right) {
                q.push(node.right);
            }
        }
        let avg = sum / count;
        result.push(avg);
    }      
    return result;
};
    
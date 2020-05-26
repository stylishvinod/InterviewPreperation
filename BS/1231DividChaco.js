/*

You have one chocolate bar that consists of some chunks. Each chunk has its own sweetness given by the array sweetness.

You want to share the chocolate with your K friends so you start cutting the chocolate bar into K+1 pieces using K cuts, each piece consists of some consecutive chunks.

Being generous, you will eat the piece with the minimum total sweetness and give the other pieces to your friends.

Find the maximum total sweetness of the piece you can get by cutting the chocolate bar optimally.

Example 1:

Input: sweetness = [1,2,3,4,5,6,7,8,9], K = 5
Output: 6
Explanation: You can divide the chocolate to [1,2,3], [4,5], [6], [7], [8], [9]
*/

/**
 * @param {number[]} sweetness
 * @param {number} K
 * @return {number}
 */
var maximizeSweetness = function(sweetness, K) {
    let start = Number.MAX_VALUE, end = 0;
    for(const sweet of sweetness) {
        start = Math.min(start, sweet);
        end += sweet;
    }
    
    while(start <= end) {
        let mid = start + Math.floor((end-start)/ 2);
        
        let pieces = 0;
        let totalSweet = 0
        for(let sweet of sweetness) {
            totalSweet +=sweet;
            if(totalSweet >= mid) {
                pieces++;
                totalSweet = 0;
            }
        }
        
        if(pieces < K +1) {
            end = mid -1 
        } else {
            start = mid + 1
        }
    }
    return end;
};
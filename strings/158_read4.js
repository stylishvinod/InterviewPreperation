
//158 - https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/

/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
     
    let tmpPtr = 0;
    let tmpCnt = 0;
    let tmp = [];
    return function(buf, n) {
        let total = 0;
        while(total < n) {
            if(tmpPtr ===0) {
                tmpCnt = read4(tmp);
            }
           if(tmpCnt === 0) break;
            
            while(total <n && tmpPtr < tmpCnt) {
                buf[total++] = tmp[tmpPtr++];
            }
            
            if(tmpPtr === tmpCnt) tmpPtr = 0;
            if(tmpCnt < 4) break;
        }
        
        return total
    };
};


/// method: 2

var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
	 
	// closure variables
    let curr = 0 // the index of current progress
    let val = [] // all the chars has read so far
	
    return function(buf, n) {
        const chunksToRead = Math.ceil((curr+n)/4)
        for (let k = 0; k < chunksToRead; k++) {
            const tmp = []
            read4(tmp)
            val = [
                ...val,
                ...tmp
            ]
        }
        
		// copy over value read so far to buf
        for (let k = 0; k < n; k++) {
            buf[k] = val[curr+k]
        }
        
        curr += n
        
        return curr
    };
};
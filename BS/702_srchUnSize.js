
// https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/

/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */
const getRange = (reader, target) => {
    let end = 1;
    while(reader.get(end) < target) {
        end = end * 2;
    }
    return [Math.floor(end/2), end];
}
/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
    let [start, end] = getRange(reader, target);
    while(start <= end) {
        const mid = start + Math.floor((end - start)/2);
        const num = reader.get(mid); 
        if( num === target) {
            return mid;
        }
        if(num > target) {
            // move left
            end = mid - 1;
        } else {
            // move right
            start = mid + 1;
        }
    }
    return -1;
};
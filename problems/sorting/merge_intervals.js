//56.. https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <=1) return intervals;
    //sort intervals
    intervals.sort(([s1, e1], [s2,e2]) => s1-s2);
    let result = [intervals[0]];
    let overlapped = intervals[0];
    let index = 0;
    for(let i= 1 ; i< intervals.length; i++) {  
        if(overlapped[1] >= intervals[i][0]) {
            result[index][1] = Math.max(overlapped[1],intervals[i][1]);
        } else {
            result.push(intervals[i]);
            ++index;
        }
        overlapped = result[result.length -1];
    }
    return result;
 };


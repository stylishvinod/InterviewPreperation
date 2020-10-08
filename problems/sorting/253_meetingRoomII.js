// https://leetcode.com/problems/meeting-rooms-ii/


// Chronological Ordering approach

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let start = [];
    let end = []
    
    intervals.forEach(([s,e]) => {
        start.push(s);
        end.push(e)
    })
    
    start.sort((a,b) => a-b)
    end.sort((a,b) => a-b)
    
    let sp= 0, ep = 0;
    let usedRooms = 0;
    while(sp < start.length) {
        
        if(start[sp] >= end[ep]) {
            usedRooms--;
            ep++
        }
        
        usedRooms++;
        sp++;
    }
  return usedRooms;  
};


// priority queue
var minMeetingRooms = function(intervals) {
    const n = intervals.length;
    if(n === 0) {
        return 0; 
    }
    // Sort intervals based on start time
    intervals.sort((a, b) => a[0] - b[0]);
    const endTimeMinHeap = [];
    // Base case: 1st meeting needs conference room
    endTimeMinHeap.push(intervals[0][1]);
    
    // Iterate remaining intervals
    for(let i=1; i < n; i++) {
        const [start, end] = intervals[i];
        // check if needs new conference room or not
        const lastMinEndTime = Math.min(...endTimeMinHeap);
        if(start >= lastMinEndTime) {
            // remove last smallest meeting to free conference room
            const index = endTimeMinHeap.indexOf(lastMinEndTime);
            endTimeMinHeap.splice(index, 1);
        }
        // Add end time
        endTimeMinHeap.push(end);
    }
    return endTimeMinHeap.length;
};
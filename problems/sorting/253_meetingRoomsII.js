//https://leetcode.com/problems/meeting-rooms-ii/submissions/


var minMeetingRooms = function(intervals) {
    if(!intervals.length) return 0;
    intervals.sort((a,b) => a[0]- b[0]);
    // need to store end time of interval
    let roomEndTimes = [intervals[0][1]];
    
    for(let i=1; i < intervals.length; i++) {
        let [start, end] = intervals[i];
        // get the earliest end time from the array
        let earliest = Math.min(...roomEndTimes);
        // if new interal start time is less than earliest end time of meeting
        //  we need new room, so push the current end time to array
        // else we can replace the current min end time with current interval endtime
        // it means no new room is required
        if(start  < earliest) {
            roomEndTimes.push(end);
        } else {
            roomEndTimes[roomEndTimes.indexOf(earliest)] = end;
        }
    }
    
    return roomEndTimes.length;
    
};
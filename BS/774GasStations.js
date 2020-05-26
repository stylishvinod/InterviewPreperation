/*
On a horizontal number line, we have gas stations at positions stations[0], stations[1], ..., stations[N-1], where N = stations.length.

Now, we add K more gas stations so that D, the maximum distance between adjacent gas stations, is minimized.

Return the smallest possible value of D.

*/



var minmaxGasDist = function(stations, K) {
    let start = 0;
    let end = 0;
    //assign max edistance b/w stations to end value
    for(let i=0; i < stations.length-1; i++) {
        end = Math.max(end, stations[i+1] - stations[i]);
    }
    let precision = 1/Math.pow(10, 6);
    while(start <= (end - precision)) {
        let mid = start + ((end-start)/ 2)
        let totalStations = getStations(stations, mid);
      
        if(totalStations > K) {
            start  = mid;
        }else {
            end = mid;
        }
    }
    return start;
};

const getStations = (stations, mid) => {
    let totalStations = 0;
    
    for(let i= 0; i <stations.length - 1 ; i++) {
        totalStations += Math.floor((stations[i+1] - stations[i]) / mid);
    }
    return totalStations;
}
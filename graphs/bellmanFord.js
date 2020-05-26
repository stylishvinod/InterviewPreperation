// https://leetcode.com/problems/network-delay-time/

var networkDelayTime = function(times, N, K) {
    /// we use N+1 so that the index matches graph node
    const time = Array(N + 1).fill(Infinity);
    time[K] = 0;
    /// we need to iterate at most N-1 times
    for (let i = 1; i < N; i+=1) {
        let count = 0;
        for (const [u, v, t] of times) {
            if (time[u] === Infinity) continue;
            if (time[v] > time[u] + t) {
                time[v] = time[u] + t;
                count+=1;
            }
        }
        if (count === 0) break;
    }

    /// we remove the first element because we never used it
    time.shift();
    let res = Math.max(...time);
    return res === Infinity ? -1 : res;
};
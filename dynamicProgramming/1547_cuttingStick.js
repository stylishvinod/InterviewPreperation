

// https://leetcode.com/problems/minimum-cost-to-cut-a-stick/

const recursion = (cuts, stickStart, stickEnd, cutsStart, cutsEnd, cache) => {
    // if cuts is exhausted
    if(cutsStart > cutsEnd) {
        return 0; // 0 cost
    }
    const key = `${stickStart}-${stickEnd}-${cutsStart}-${cutsEnd}`;
    if(cache.has(key)) {
        return cache.get(key);
    }
    // width will be the cost
    const cost = stickEnd - stickStart;
    let minCost = Number.MAX_SAFE_INTEGER;
    // Apply all possible cuts
    for (let i= cutsStart; i <= cutsEnd; i++) {
        const cut = cuts[i];
        // if cut is not possible then skip
        if(cut >= stickEnd || cut <= stickStart){
            continue;
        }
        // Apply cuts
        minCost = Math.min(
            minCost,
            cost+ recursion(cuts, stickStart, cut, cutsStart, i-1, cache)+
            recursion(cuts, cut, stickEnd, i+1, cutsEnd, cache)
        )
    }
    
    cache.set(key, minCost);
    return  minCost;
}
/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    cuts.sort((a, b) => a - b);
    return recursion(cuts, 0, n, 0, cuts.length - 1, new Map());
};
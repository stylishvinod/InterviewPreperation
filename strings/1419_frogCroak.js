// 1419: https://leetcode.com/problems/minimum-number-of-frogs-croaking/


/**
 * @param {string} croakOfFrogs
 * @return {number}
 */

const idx = new Map([
    ['c', 0],
    ['r', 1],
    ['o', 2],
    ['a', 3],
    ['k', 4]
]);

var minNumberOfFrogs = function(croakOfFrogs) {
    let arr = new Array(5).fill(0);
    let n = croakOfFrogs.length;
    let res = 0; let count = 0;

    for(let i = 0 ; i <n; i++ ) {
        arr[idx.get(croakOfFrogs[i])]++;
        let cha = croakOfFrogs[i];
        if(cha === 'c') {
            count++;
            res = Math.max(res, count);
        } else if(cha ==='k') {
            count--;
        } else if(arr[idx.get(cha) - 1]  < arr[idx.get(cha)]) {
            return -1;
        }
    }
    
    return count === 0 ? res : -1;
};
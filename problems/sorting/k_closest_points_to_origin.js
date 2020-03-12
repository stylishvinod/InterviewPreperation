// We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

// (Here, the distance between two points on a plane is the Euclidean distance.)

// You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

// ex::1
// Input: points = [[1,3],[-2,2]], K = 1
// Output: [[-2,2]]
// Explanation: 
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].


//https://leetcode.com/problems/k-closest-points-to-origin/

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
    if (points.length <= K) return points;

    let result = points.map(([x, y]) => {
        const dist = x * x + y * y;
        return [dist, [x, y]];
    });
    const kpoints = quickSelect(result, 0, points.length - 1, K);

    return kpoints.map(a => a[1]);

};

function quickSelect(arr, start, end, K) {

    let pivot = getRandomNumber(start, end);
    swapEle(arr, start, pivot);
    const pivotIndex = getPartitionIndex(arr, start, end);
    swapEle(arr, start, pivotIndex);

    if (pivotIndex + 1 === K) {

        return arr.slice(0, K);
    } else if (pivotIndex + 1 < K) {
        return quickSelect(arr, pivotIndex + 1, end, K);
    } else {
        return quickSelect(arr, start, pivotIndex - 1, K);
    }
}

function getPartitionIndex(arr, start, end) {
    let left = start;
    let right = start + 1;
    while (right <= end) {
        if (arr[right][0] < arr[start][0]) {
            left++;
            if (left !== right) {
                swapEle(arr, left, right);
            }
        }
        right++;
    }
    return left;
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
}

function swapEle(arr, start, end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
}